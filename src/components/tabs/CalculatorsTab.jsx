import React, { useState } from 'react';
import { usePatient } from '../../context/PatientContext';
import { RotateCcw, CheckCircle2, Info } from 'lucide-react';
import { getBMICategory } from '../../utils/calculators';

export function CalculatorsTab() {
  const { patient, metrics, updatePatient } = usePatient();
  const [justSynced, setJustSynced] = useState(false);

  const handleGenderChange = (gender) => {
    updatePatient({ gender });
  };

  const handleScrUnitChange = (unit) => {
    if (unit === patient.scrUnit) return;
    if (unit === 'umol') {
      updatePatient({
        scrUnit: 'umol',
        scr: Math.round(patient.scr * 88.4)
      });
    } else {
      updatePatient({
        scrUnit: 'mg',
        scr: parseFloat((patient.scr / 88.4).toFixed(1))
      });
    }
  };

  const handleReset = () => {
    updatePatient({
      gender: 'male',
      age: 65,
      weightKg: 68,
      heightCm: 168,
      scr: 1.8,
      scrUnit: 'mg'
    });
  };

  const handleSyncToast = () => {
    setJustSynced(true);
    setTimeout(() => setJustSynced(false), 2000);
  };

  const bmiCategory = getBMICategory(parseFloat(metrics.bmi));

  return (
    <div className="space-y-3">
      {/* Tab Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <span className="text-teal-600 dark:text-teal-400">●</span> Máy tính Lâm sàng & Thận học
        </h2>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          CrCl (Cockcroft-Gault), eGFR (CKD-EPI 2021), IBW & AdjBW
        </p>
      </div>

      {/* Input Parameters Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Thông số Bệnh nhân (Global Context)
          </span>
          <button
            onClick={handleReset}
            className="text-[11px] text-teal-600 hover:underline font-medium flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Khôi phục
          </button>
        </div>

        {/* Gender & Age */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <label className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium mb-1">
              Giới tính
            </label>
            <div className="grid grid-cols-2 gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => handleGenderChange('male')}
                className={`py-1 rounded font-semibold text-xs transition ${
                  patient.gender === 'male'
                    ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Nam
              </button>
              <button
                type="button"
                onClick={() => handleGenderChange('female')}
                className={`py-1 rounded font-semibold text-xs transition ${
                  patient.gender === 'female'
                    ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-300 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Nữ
              </button>
            </div>
          </div>

          <div>
            <label className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium mb-1">
              Tuổi (năm)
            </label>
            <input
              type="number"
              value={patient.age}
              min="1"
              max="120"
              onChange={(e) => updatePatient({ age: parseFloat(e.target.value) || 0 })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-100 focus:ring-1 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* Weight & Height */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <label className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium mb-1">
              Cân nặng thực tế (kg)
            </label>
            <input
              type="number"
              value={patient.weightKg}
              step="0.5"
              onChange={(e) => updatePatient({ weightKg: parseFloat(e.target.value) || 0 })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-100 focus:ring-1 focus:ring-teal-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-500 dark:text-slate-400 text-[11px] font-medium mb-1">
              Chiều cao (cm)
            </label>
            <input
              type="number"
              value={patient.heightCm}
              onChange={(e) => updatePatient({ heightCm: parseFloat(e.target.value) || 0 })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-100 focus:ring-1 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* SCr */}
        <div className="text-xs">
          <div className="flex items-center justify-between mb-1">
            <label className="text-slate-500 dark:text-slate-400 text-[11px] font-medium">
              Creatinine huyết thanh (SCr)
            </label>
            <div className="flex items-center gap-1 text-[10px]">
              <button
                type="button"
                onClick={() => handleScrUnitChange('mg')}
                className={`px-1.5 py-0.5 rounded font-bold transition ${
                  patient.scrUnit === 'mg'
                    ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300'
                    : 'text-slate-400'
                }`}
              >
                mg/dL
              </button>
              <button
                type="button"
                onClick={() => handleScrUnitChange('umol')}
                className={`px-1.5 py-0.5 rounded font-bold transition ${
                  patient.scrUnit === 'umol'
                    ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300'
                    : 'text-slate-400'
                }`}
              >
                µmol/L
              </button>
            </div>
          </div>
          <input
            type="number"
            value={patient.scr}
            step="0.1"
            onChange={(e) => updatePatient({ scr: parseFloat(e.target.value) || 0 })}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-100 focus:ring-1 focus:ring-teal-500 outline-none"
          />
        </div>

        {/* Sync Status Button */}
        <button
          onClick={handleSyncToast}
          className="w-full py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-600/20 transition"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{justSynced ? "Đã đồng bộ vào toàn bộ phác đồ!" : "Đồng bộ Thông số Toàn Ứng dụng"}</span>
        </button>
      </div>

      {/* Results Overview */}
      <div className="space-y-2.5">
        {/* Cockcroft-Gault Main Display */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-white dark:from-teal-950/40 dark:via-slate-800 dark:to-slate-800 border border-teal-200 dark:border-teal-800/60 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wide">
                Cockcroft - Gault (CrCl)
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  {metrics.crCl}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  mL/phút
                </span>
              </div>
            </div>
            <div className={`px-2.5 py-1 rounded-full text-xs font-bold border ${metrics.renalStage.badgeClass}`}>
              {metrics.renalStage.stage}
            </div>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 border-t border-slate-100 dark:border-slate-700/60 pt-1.5 leading-relaxed">
            Quy chuẩn Sanford: Dùng cân nặng <strong>{metrics.weightType} = {metrics.weightUsed} kg</strong> ({metrics.pctIbw}% IBW).
          </p>
        </div>

        {/* Secondary Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] block">Cân nặng lý tưởng (IBW)</span>
            <span className="text-base font-bold text-slate-800 dark:text-slate-200">{metrics.ibw} kg</span>
            <span className="text-[10px] text-teal-600 block mt-0.5">{metrics.pctIbw}% IBW</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] block">Cân nặng hiệu chỉnh (AdjBW)</span>
            <span className="text-base font-bold text-slate-800 dark:text-slate-200">{metrics.adjBw} kg</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Dùng khi béo phì &gt;120%</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] block">Chỉ số khối (BMI)</span>
            <span className="text-base font-bold text-slate-800 dark:text-slate-200">{metrics.bmi} kg/m²</span>
            <span className={`text-[10px] block mt-0.5 ${bmiCategory.color}`}>{bmiCategory.category}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] block">eGFR (CKD-EPI 2021)</span>
            <span className="text-base font-bold text-slate-800 dark:text-slate-200">{metrics.egfr}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">mL/min/1.73m² (Không phân tộc)</span>
          </div>
        </div>

        {/* Sanford Guidance Note */}
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
          <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200">
            <Info className="w-3.5 h-3.5 text-teal-600" />
            <span>Quy tắc Sanford Guide:</span>
          </div>
          <p>• Dùng <strong>Cockcroft-Gault CrCl</strong> để tra cứu và chỉnh liều kháng sinh của Sanford Guide (không dùng eGFR).</p>
          <p>• Nếu ABW &gt; 120% IBW, dùng cân nặng hiệu chỉnh (AdjBW) để tránh quá liều thuốc thải trừ qua thận.</p>
        </div>
      </div>
    </div>
  );
}
