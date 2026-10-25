import React, { useState } from 'react';
import { usePatient } from '../context/PatientContext';
import { X, AlertTriangle, Clock, FlaskConical, Utensils, ShieldCheck } from 'lucide-react';

export function DrugDetailModal({ drug, onClose }) {
  const { metrics } = usePatient();
  const [modalTab, setModalTab] = useState('dosing'); // 'dosing' | 'pkpd'

  if (!drug) return null;

  const crClNum = parseFloat(metrics.crCl);

  // Tailored dose recommendation
  let tailoredDose = drug.renalDose.crcl50;
  if (crClNum < 20) {
    tailoredDose = drug.renalDose.crcl_under20;
  } else if (crClNum < 50) {
    tailoredDose = drug.renalDose.crcl20_50;
  }

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div className="bg-white dark:bg-slate-900 w-full sm:max-w-lg max-h-[85vh] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold text-xs">
              Rx
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {drug.name} <span className="text-xs font-normal text-slate-400">({drug.brand})</span>
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                <span className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                  {drug.class}
                </span>
                {drug.sources && drug.sources.map((s, idx) => (
                  <span key={idx} className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${s.class}`}>
                    {s.badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Sub-Tabs */}
        <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800 p-1 text-xs font-semibold border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setModalTab('dosing')}
            className={`py-1.5 rounded-lg transition ${
              modalTab === 'dosing'
                ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Chỉnh liều theo Thận
          </button>
          <button
            onClick={() => setModalTab('pkpd')}
            className={`py-1.5 rounded-lg transition ${
              modalTab === 'pkpd'
                ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Sử dụng & Tối ưu PK/PD
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 overflow-y-auto space-y-3.5 text-xs">
          
          {modalTab === 'dosing' && (
            <>
              {/* Active Patient Tailored Alert */}
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900">
                <span className="font-bold text-teal-800 dark:text-teal-300 block mb-0.5 text-xs">
                  Liều khuyến cáo cá thể hóa (CrCl = {metrics.crCl} mL/min):
                </span>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  {tailoredDose}
                </p>
              </div>

              {/* Mechanism */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Cơ chế tác dụng:</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  {drug.mechanism}
                </p>
              </div>

              {/* Renal Dosing Breakdown */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Bảng chỉnh liều thận (The Sanford Guide & Bộ Y tế):</h4>
                <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl space-y-1 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                  <div><strong>• Bình thường (CrCl &gt; 50):</strong> {drug.renalDose.crcl50}</div>
                  <div><strong>• CrCl 20 - 50 mL/min:</strong> {drug.renalDose.crcl20_50}</div>
                  <div><strong>• CrCl &lt; 20 mL/min:</strong> {drug.renalDose.crcl_under20}</div>
                  <div><strong>• Thận nhân tạo (HD):</strong> {drug.renalDose.hd}</div>
                  <div><strong>• Lọc máu liên tục (CRRT):</strong> {drug.renalDose.crrt}</div>
                </div>
              </div>

              {/* Sanford Clinical Pearl */}
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Sanford Clinical Pearl & Cảnh báo an toàn:</span>
                </div>
                <p className="leading-relaxed text-xs">{drug.pearl}</p>
              </div>
            </>
          )}

          {modalTab === 'pkpd' && (
            <div className="space-y-3">
              {drug.administration ? (
                <>
                  {/* Compatible Diluents */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-teal-800 dark:text-teal-300">
                      <FlaskConical className="w-4 h-4 text-teal-600" />
                      <span>Dung môi Pha loãng & Độ tương thích:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      {drug.administration.compatibleDiluents}
                    </p>
                  </div>

                  {/* Infusion Rate & PK/PD */}
                  <div className="p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-teal-800 dark:text-teal-300">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span>Tốc độ Truyền & Tối ưu hóa PK/PD:</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-xs whitespace-pre-line font-medium">
                      {drug.administration.infusionRate}
                    </p>
                  </div>

                  {/* Food & Meal Timing */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                      <Utensils className="w-4 h-4 text-slate-500" />
                      <span>Thời điểm dùng thuốc so với Bữa ăn:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs whitespace-pre-line">
                      {drug.administration.foodTiming}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-slate-400 text-center py-4">Chưa có dữ liệu hướng dẫn pha chế cho thuốc này.</p>
              )}

              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 text-[11px] text-slate-600 dark:text-slate-400">
                <strong>Theo dõi cận lâm sàng (Monitoring):</strong> {drug.monitoring}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-500 dark:text-slate-400 text-[11px]">Sanford Guide & Bộ Y tế Standard</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
          >
            Đã hiểu
          </button>
        </div>

      </div>
    </div>
  );
}
