/**
 * Clinical Calculations Engine - The Sanford Guide & ASHP Standards
 */

export function calculateIBW(heightCm, gender) {
  const heightInches = heightCm / 2.54;
  if (gender === 'male') {
    return 50 + 2.3 * (heightInches - 60);
  } else {
    return 45.5 + 2.3 * (heightInches - 60);
  }
}

export function calculateAdjBW(ibw, abw) {
  return ibw + 0.4 * (abw - ibw);
}

export function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { category: 'Nhẹ cân', color: 'text-amber-600' };
  if (bmi < 25) return { category: 'Bình thường', color: 'text-emerald-600' };
  if (bmi < 30) return { category: 'Thừa cân', color: 'text-amber-600' };
  return { category: 'Béo phì', color: 'text-rose-600' };
}

/**
 * Cockcroft-Gault Equation with Sanford Weight Selection Rules:
 * - If ABW < IBW: Use ABW (avoids overestimating clearance)
 * - If ABW is 100% - 120% IBW: Use ABW
 * - If ABW > 120% IBW: Use AdjBW
 */
export function calculateCrCl({ age, weightKg, heightCm, gender, scrMgDl }) {
  const ibw = calculateIBW(heightCm, gender);
  const adjBw = calculateAdjBW(ibw, weightKg);
  const pctIbw = (weightKg / ibw) * 100;

  let weightUsed = weightKg;
  let weightType = 'ABW';

  if (weightKg < ibw) {
    weightUsed = weightKg;
    weightType = 'ABW (Nhẹ cân)';
  } else if (pctIbw > 120) {
    weightUsed = adjBw;
    weightType = 'AdjBW (Béo phì >120% IBW)';
  } else {
    weightUsed = weightKg;
    weightType = 'ABW (Bình thường)';
  }

  let crCl = ((140 - age) * weightUsed) / (72 * scrMgDl);
  if (gender === 'female') {
    crCl *= 0.85;
  }

  return {
    crCl: Math.max(0, crCl),
    weightUsed,
    weightType,
    ibw,
    adjBw,
    pctIbw
  };
}

/**
 * CKD-EPI 2021 Race-Free Formula for eGFR (mL/min/1.73m²)
 */
export function calculateCKDEPI({ age, gender, scrMgDl }) {
  let egfr = 0;
  if (gender === 'female') {
    const k = 0.7;
    const alpha = -0.241;
    const minScr = Math.min(scrMgDl / k, 1);
    const maxScr = Math.max(scrMgDl / k, 1);
    egfr = 142 * Math.pow(minScr, alpha) * Math.pow(maxScr, -1.2) * Math.pow(0.9938, age) * 1.012;
  } else {
    const k = 0.9;
    const alpha = -0.302;
    const minScr = Math.min(scrMgDl / k, 1);
    const maxScr = Math.max(scrMgDl / k, 1);
    egfr = 142 * Math.pow(minScr, alpha) * Math.pow(maxScr, -1.2) * Math.pow(0.9938, age);
  }
  return Math.max(0, egfr);
}

export function getRenalStage(crCl) {
  if (crCl >= 90) {
    return {
      stage: 'Bình thường / G1',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
      description: 'Chức năng lọc thận bình thường'
    };
  }
  if (crCl >= 60) {
    return {
      stage: 'Suy nhẹ / G2',
      badgeClass: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-300',
      description: 'Giảm nhẹ mức lọc thận'
    };
  }
  if (crCl >= 30) {
    return {
      stage: 'Suy trung bình / G3',
      badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
      description: 'Cần giảm liều hoặc giãn khoảng cách liều hầu hết các kháng sinh'
    };
  }
  if (crCl >= 15) {
    return {
      stage: 'Suy nặng / G4',
      badgeClass: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border-orange-300',
      description: 'Nguy cơ độc thận & tích lũy thuốc cao, theo dõi sát'
    };
  }
  return {
    stage: 'Suy thận g/đ cuối / G5',
    badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300',
    description: 'Chỉ định lọc máu (HD/CRRT), dùng liều theo protocol thận nhân tạo'
  };
}
