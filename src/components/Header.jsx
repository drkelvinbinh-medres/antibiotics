import React, { useState, useEffect } from 'react';
import { usePatient } from '../context/PatientContext';
import { Moon, Sun, UserCheck, Stethoscope, Wifi, WifiOff } from 'lucide-react';
import { OfflineStorage } from '../utils/offlineStorage';

export function Header({ isDarkMode, onToggleTheme, onNavigateToCalculators }) {
  const { patient, metrics } = usePatient();
  const [isOnline, setIsOnline] = useState(OfflineStorage.isOnline());
  const genderText = patient.gender === 'male' ? 'Nam' : 'Nữ';

  useEffect(() => {
    const cleanup = OfflineStorage.registerNetworkListeners((onlineStatus) => {
      setIsOnline(onlineStatus);
    });
    return cleanup;
  }, []);

  return (
    <header className="bg-gradient-to-b from-teal-500/10 via-transparent to-transparent px-4 pt-3 pb-2.5 border-b border-teal-100/60 dark:border-slate-800">
      <div className="flex items-center justify-between">
        {/* Brand & Minimalist Medical Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <h1 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center">
                Anti<span className="text-teal-600 dark:text-teal-400">Bacteria</span>
              </h1>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                SANFORD & BYT
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-none mt-0.5">
              Clinical Antimicrobial Guide & Bilingual Learning
            </p>
          </div>
        </div>

        {/* Network & Night Shift Buttons */}
        <div className="flex items-center gap-1.5">
          {/* Offline/Online Indicator Pill */}
          <div
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 border transition ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 animate-pulse'
            }`}
            title={isOnline ? "Đã sẵn sàng ngoại tuyến PWA" : "Đang dùng dữ liệu ngoại tuyến (Offline Mode)"}
          >
            {isOnline ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="hidden sm:inline">PWA Sẵn sàng</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3 h-3 text-amber-600" />
                <span>Ngoại tuyến</span>
              </>
            )}
          </div>

          {/* Night Shift Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-lg border border-teal-200 dark:border-teal-800/60 bg-teal-50/70 dark:bg-slate-800 text-teal-800 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-slate-700 transition"
            title={isDarkMode ? "Chuyển sang Ban ngày" : "Bật chế độ Trực đêm (Night Shift)"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Global Patient Context Strip */}
      <div className="mt-2.5 px-2.5 py-1.5 rounded-xl bg-teal-50/80 dark:bg-slate-800/90 border border-teal-200/80 dark:border-teal-900/60 flex items-center justify-between text-xs transition">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-teal-600" />
            BN:
          </span>
          <span className="text-slate-700 dark:text-slate-300 font-medium truncate text-xs">
            {genderText}, {patient.age}t | {patient.weightKg}kg ({patient.heightCm}cm) | SCr: {patient.scr} {patient.scrUnit === 'mg' ? 'mg/dL' : 'µmol/L'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] border ${metrics.renalStage.badgeClass}`}>
            CrCl: {metrics.crCl} mL/p
          </span>
          <button
            onClick={onNavigateToCalculators}
            className="text-teal-600 dark:text-teal-400 hover:underline font-semibold text-[11px]"
          >
            Sửa
          </button>
        </div>
      </div>
    </header>
  );
}
