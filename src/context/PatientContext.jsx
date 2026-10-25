import React, { createContext, useContext, useState, useMemo } from 'react';
import { calculateCrCl, calculateCKDEPI, calculateBMI, calculateIBW, calculateAdjBW, getRenalStage } from '../utils/calculators';

const PatientContext = createContext(null);

export function PatientProvider({ children }) {
  const [patient, setPatient] = useState({
    gender: 'male',
    age: 65,
    weightKg: 68,
    heightCm: 168,
    scr: 1.8,
    scrUnit: 'mg' // 'mg' or 'umol'
  });

  const [selectedDrugForModal, setSelectedDrugForModal] = useState(null);

  // Derived clinical calculations
  const metrics = useMemo(() => {
    const scrMgDl = patient.scrUnit === 'umol' ? patient.scr / 88.4 : patient.scr;
    const crclData = calculateCrCl({
      age: patient.age,
      weightKg: patient.weightKg,
      heightCm: patient.heightCm,
      gender: patient.gender,
      scrMgDl
    });

    const egfr = calculateCKDEPI({
      age: patient.age,
      gender: patient.gender,
      scrMgDl
    });

    const bmi = calculateBMI(patient.weightKg, patient.heightCm);
    const renalStage = getRenalStage(crclData.crCl);

    return {
      scrMgDl,
      crCl: crclData.crCl.toFixed(1),
      egfr: egfr.toFixed(1),
      bmi: bmi.toFixed(1),
      ibw: crclData.ibw.toFixed(1),
      adjBw: crclData.adjBw.toFixed(1),
      pctIbw: crclData.pctIbw.toFixed(0),
      weightUsed: crclData.weightUsed.toFixed(1),
      weightType: crclData.weightType,
      renalStage
    };
  }, [patient]);

  const updatePatient = (updates) => {
    setPatient(prev => ({ ...prev, ...updates }));
  };

  return (
    <PatientContext.Provider value={{
      patient,
      metrics,
      updatePatient,
      selectedDrugForModal,
      setSelectedDrugForModal
    }}>
      {children}
    </PatientContext.Provider>
  );
}

export function usePatient() {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatient must be used within a PatientProvider');
  }
  return context;
}
