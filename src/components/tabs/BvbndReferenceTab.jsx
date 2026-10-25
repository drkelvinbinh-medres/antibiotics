import React, { useState } from 'react';
import { BVBND_FLOWCHARTS } from '../../data/bvbndFlowchartsData';
import { ShieldAlert, GitBranch, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';

export function BvbndReferenceTab() {
  const [activeFlowchartId, setActiveFlowchartId] = useState('bvbnd_mdr_stratification');

  const currentFlowchart = BVBND_FLOWCHARTS.find(f => f.id === activeFlowchartId) || BVBND_FLOWCHARTS[0];

  return (
    <div className="space-y-3">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span className="text-emerald-600 dark:text-emerald-400">●</span> Thực chiến Bệnh viện Bệnh Nhiệt Đới
          </h2>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            BV Bệnh Nhiệt Đới - eMed
          </span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
          Sổ tay hướng dẫn sử dụng kháng sinh & Lưu đồ tiếp cận thực chiến theo mô hình vi sinh tại Việt Nam (emed.bvbnd.vn)
        </p>
      </div>

      {/* Flowchart Switcher */}
      <div className="grid grid-cols-2 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setActiveFlowchartId('bvbnd_mdr_stratification')}
          className={`py-1.5 rounded-lg transition text-center ${
            activeFlowchartId === 'bvbnd_mdr_stratification'
              ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Phân nhóm Nguy cơ MDR 1 - 2 - 3
        </button>
        <button
          onClick={() => setActiveFlowchartId('bvbnd_septic_shock_flowchart')}
          className={`py-1.5 rounded-lg transition text-center ${
            activeFlowchartId === 'bvbnd_septic_shock_flowchart'
              ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Lưu đồ Sốc Nhiễm khuẩn 6 Bước
        </button>
      </div>

      {/* Flowchart 1: MDR Stratification */}
      {currentFlowchart.id === 'bvbnd_mdr_stratification' && (
        <div className="space-y-3">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-0.5">
              Ý nghĩa lâm sàng thực chiến tại Việt Nam:
            </span>
            Phân nhóm theo Sổ tay Kháng sinh Bệnh viện Bệnh Nhiệt Đới TPHCM giúp bác sĩ nhận diện nguy cơ vi khuẩn sinh men ESBL và trực khuẩn Gram âm đa kháng ngay tại thời điểm nhập viện, tránh chậm trễ trong hồi sức nhưng không lạm dụng Carbapenem ở nhóm nguy cơ thấp.
          </div>

          <div className="space-y-3">
            {currentFlowchart.groups.map((grp, idx) => {
              let badgeColor = 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-300';
              if (idx === 1) badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300';
              if (idx === 2) badgeColor = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300';

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      {grp.groupLevel}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border flex-shrink-0 ${badgeColor}`}>
                      Nhóm {idx + 1}
                    </span>
                  </div>

                  {/* Criteria */}
                  <div className="text-xs space-y-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">
                      Tiêu chí xác định nguy cơ:
                    </span>
                    <ul className="space-y-0.5 text-slate-700 dark:text-slate-300 text-[11px]">
                      {grp.criteria.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended regimens */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400 block">
                      Phác đồ Kháng sinh Ban đầu Đề xuất:
                    </span>
                    <ul className="space-y-1 text-xs">
                      {grp.recommendedRegimens.map((r, i) => (
                        <li key={i} className="flex items-start gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pearl */}
                  <div className="text-[11px] p-2 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300">
                    💡 <strong>eMed Pearl:</strong> {grp.bvbndPearl}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Flowchart 2: Sepsis Flowchart */}
      {currentFlowchart.id === 'bvbnd_septic_shock_flowchart' && (
        <div className="space-y-3">
          <div className="space-y-2.5">
            {currentFlowchart.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3 border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {st.step}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {st.action}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
            Nguồn: <strong>{currentFlowchart.sourceFull}</strong>.
          </div>
        </div>
      )}
    </div>
  );
}
