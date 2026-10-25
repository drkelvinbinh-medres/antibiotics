import React, { useState } from 'react';
import { SYNDROMES_DATA } from '../../data/syndromesData';
import { usePatient } from '../../context/PatientContext';
import { DRUGS_DATA } from '../../data/drugsData';
import { AlertCircle, ExternalLink, Globe, Landmark } from 'lucide-react';

export function SyndromesTab() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCrossView, setActiveCrossView] = useState({}); // { [syndromeId]: 'vietnam' | 'international' }
  const { metrics, setSelectedDrugForModal } = usePatient();

  const filteredSyndromes = selectedCategory === 'all'
    ? SYNDROMES_DATA
    : SYNDROMES_DATA.filter(s => s.category === selectedCategory);

  const handleDrugClick = (drugName) => {
    const normalized = drugName.toLowerCase();
    const found = DRUGS_DATA.find(d =>
      d.name.toLowerCase().includes(normalized) ||
      normalized.includes(d.name.toLowerCase().split(' ')[0]) ||
      d.brand.toLowerCase().includes(normalized)
    );

    if (found) {
      setSelectedDrugForModal(found);
    }
  };

  const toggleCrossView = (id, view) => {
    setActiveCrossView(prev => ({ ...prev, [id]: view }));
  };

  return (
    <div className="space-y-3">
      {/* Tab Header & Filter */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span className="text-teal-600 dark:text-teal-400">●</span> Phác đồ theo Hội chứng Lâm sàng
          </h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Tra cứu chéo: Chuẩn Quốc tế (IDSA/Sanford) vs Thực chiến Việt Nam (BV Bệnh Nhiệt Đới / BYT)
          </p>
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500"
        >
          <option value="all">Tất cả hệ cơ quan</option>
          <option value="respiratory">Hô hấp (CAP, HAP/VAP)</option>
          <option value="urinary">Tiết niệu (UTI, Pyelo)</option>
          <option value="abdominal">Tiêu hóa & Ổ bụng</option>
          <option value="ssti">Da & Mô mềm (SSTI)</option>
          <option value="cns">Thần kinh trung ương</option>
          <option value="sepsis">Nhiễm khuẩn huyết / Sepsis</option>
        </select>
      </div>

      {/* Global Renal Warning Pill */}
      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Cảnh báo đồng bộ:</span> Bệnh nhân có CrCl = <strong>{metrics.crCl} mL/min</strong> ({metrics.renalStage.stage}). Nhấn vào tên thuốc để xem ngay bảng liều chỉnh theo thận!
        </div>
      </div>

      {/* List of Syndrome Cards */}
      <div className="space-y-3">
        {filteredSyndromes.map((syndrome) => {
          const currentView = activeCrossView[syndrome.id] || 'vietnam';

          return (
            <div
              key={syndrome.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2.5 transition hover:border-teal-300 dark:hover:border-teal-800"
            >
              {/* Title & Source Attribution Badges */}
              <div className="border-b border-slate-100 dark:border-slate-700/60 pb-2 space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-teal-600 dark:text-teal-400 tracking-wider">
                      {syndrome.organ}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                      {syndrome.disease}
                    </h3>
                  </div>
                </div>

                {/* Source Badges */}
                <div className="flex items-center gap-1 flex-wrap">
                  {syndrome.sources && syndrome.sources.map((s, idx) => (
                    <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-bold border ${s.class}`}>
                      {s.badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical Stratification */}
              <div className="text-[11px] bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl text-slate-600 dark:text-slate-400">
                <strong className="text-slate-700 dark:text-slate-300">Phân tầng:</strong> {syndrome.stratification}
              </div>

              {/* Cross-Reference View Switcher (IDSA vs BV Bệnh Nhiệt Đới / BYT) */}
              {syndrome.crossReference && (
                <div className="rounded-xl border border-teal-200/80 dark:border-teal-900/60 overflow-hidden text-xs">
                  <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-900 p-1 gap-1 text-[11px] font-semibold">
                    <button
                      type="button"
                      onClick={() => toggleCrossView(syndrome.id, 'vietnam')}
                      className={`py-1 rounded-lg flex items-center justify-center gap-1 transition ${
                        currentView === 'vietnam'
                          ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 shadow-sm font-bold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Landmark className="w-3 h-3 text-emerald-600" />
                      <span>Thực chiến Việt Nam</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleCrossView(syndrome.id, 'international')}
                      className={`py-1 rounded-lg flex items-center justify-center gap-1 transition ${
                        currentView === 'international'
                          ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm font-bold'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Globe className="w-3 h-3 text-blue-600" />
                      <span>Chuẩn Quốc tế</span>
                    </button>
                  </div>

                  <div className="p-2.5 bg-teal-50/30 dark:bg-slate-800/40 text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentView === 'vietnam' ? (
                      <div>
                        <strong className="text-emerald-700 dark:text-emerald-400 block mb-0.5">
                          {syndrome.crossReference.vietnam.title}:
                        </strong>
                        <p>{syndrome.crossReference.vietnam.content}</p>
                      </div>
                    ) : (
                      <div>
                        <strong className="text-blue-700 dark:text-blue-400 block mb-0.5">
                          {syndrome.crossReference.international.title}:
                        </strong>
                        <p>{syndrome.crossReference.international.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Regimens */}
              <div className="space-y-2 text-xs">
                {/* Primary Regimen */}
                <div className="p-2.5 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/50">
                  <span className="font-bold text-teal-800 dark:text-teal-300 text-[11px] flex items-center gap-1 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Phác đồ Ưu tiên (Primary Regimen):
                  </span>
                  <ul className="space-y-1 text-xs">
                    {syndrome.primaryRegimen.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                        <div className="leading-snug">
                          <button
                            onClick={() => handleDrugClick(item.drug)}
                            className="font-bold text-teal-700 dark:text-teal-300 hover:underline inline-flex items-center gap-1"
                          >
                            {item.drug}
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </button>
                          : <span className="text-slate-700 dark:text-slate-300">{item.dose}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Alternative Regimen */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60">
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-[11px] flex items-center gap-1 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Phác đồ Thay thế (Alternative):
                  </span>
                  <ul className="space-y-1 text-xs">
                    {syndrome.altRegimen.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                        <div className="leading-snug">
                          <button
                            onClick={() => handleDrugClick(item.drug)}
                            className="font-bold text-teal-700 dark:text-teal-300 hover:underline inline-flex items-center gap-1"
                          >
                            {item.drug}
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </button>
                          : <span className="text-slate-700 dark:text-slate-300">{item.dose}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Clinical Note */}
              <div className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1 border-t border-slate-100 dark:border-slate-700/40">
                💡 {syndrome.notes}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
