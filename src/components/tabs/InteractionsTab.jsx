import React, { useState } from 'react';
import { DRUG_INTERACTIONS_DATA, CLINICAL_SAFETY_ALERTS } from '../../data/interactionsData';
import { AlertTriangle, ShieldAlert, Search, Info, CheckCircle2, ChevronRight, Activity, Ear, AlertOctagon, Baby } from 'lucide-react';

export function InteractionsTab() {
  const [activeSubTab, setActiveSubTab] = useState('checker'); // 'checker' | 'alerts'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedAlertCategory, setSelectedAlertCategory] = useState('all');

  const filteredInteractions = DRUG_INTERACTIONS_DATA.filter((item) => {
    const matchesSearch = 
      item.antibiotic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.coDrug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.coDrugClass.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = selectedSeverity === 'all' || item.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const filteredAlerts = selectedAlertCategory === 'all'
    ? CLINICAL_SAFETY_ALERTS
    : CLINICAL_SAFETY_ALERTS.filter(a => a.category === selectedAlertCategory);

  const getAlertIcon = (iconName) => {
    switch(iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-rose-500" />;
      case 'Ear': return <Ear className="w-4 h-4 text-amber-500" />;
      case 'Activity': return <Activity className="w-4 h-4 text-purple-500" />;
      case 'AlertOctagon': return <AlertOctagon className="w-4 h-4 text-rose-600" />;
      case 'Baby': return <Baby className="w-4 h-4 text-teal-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-3">
      {/* Tab Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <span className="text-teal-600 dark:text-teal-400">●</span> Tương tác & Cảnh báo Dược Lâm sàng
        </h2>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Tra cứu tương tác thuốc nguy cơ cao & Độc tính theo cơ quan
        </p>
      </div>

      {/* Sub-tab Switcher */}
      <div className="grid grid-cols-2 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setActiveSubTab('checker')}
          className={`py-1.5 rounded-lg transition ${
            activeSubTab === 'checker'
              ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Kiểm tra Tương tác (Interaction Checker)
        </button>
        <button
          onClick={() => setActiveSubTab('alerts')}
          className={`py-1.5 rounded-lg transition ${
            activeSubTab === 'alerts'
              ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Cảnh báo Độc tính & Thai kỳ (Safety Alerts)
        </button>
      </div>

      {/* SUB-TAB 1: INTERACTION CHECKER */}
      {activeSubTab === 'checker' && (
        <div className="space-y-3">
          {/* Search & Severity Filter */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kháng sinh hoặc thuốc nội khoa (vd: Meropenem, Statin, Diamicron...)"
                className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-[11px]">
              <button
                onClick={() => setSelectedSeverity('all')}
                className={`px-2.5 py-1 rounded-full font-semibold flex-shrink-0 transition ${
                  selectedSeverity === 'all'
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                Tất cả mức độ
              </button>
              <button
                onClick={() => setSelectedSeverity('contraindicated')}
                className={`px-2.5 py-1 rounded-full font-semibold flex-shrink-0 transition ${
                  selectedSeverity === 'contraindicated'
                    ? 'bg-rose-600 text-white'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400'
                }`}
              >
                🔴 Chống chỉ định
              </button>
              <button
                onClick={() => setSelectedSeverity('major')}
                className={`px-2.5 py-1 rounded-full font-semibold flex-shrink-0 transition ${
                  selectedSeverity === 'major'
                    ? 'bg-amber-600 text-white'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400'
                }`}
              >
                🟡 Nghiêm trọng / Cần theo dõi
              </button>
            </div>
          </div>

          {/* Interactions List */}
          <div className="space-y-3">
            {filteredInteractions.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-6">
                Không tìm thấy cặp tương tác phù hợp từ khóa.
              </p>
            ) : (
              filteredInteractions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2.5"
                >
                  {/* Pair header & severity */}
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2">
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 flex-wrap">
                        <span className="text-teal-700 dark:text-teal-300 font-extrabold">{item.antibiotic}</span>
                        <span className="text-slate-400 font-normal">+</span>
                        <span className="text-slate-800 dark:text-slate-200">{item.coDrug}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">Nhóm: {item.coDrugClass}</span>
                    </div>

                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex-shrink-0 ${item.severityColor}`}>
                      {item.severityLabel}
                    </span>
                  </div>

                  {/* Mechanism */}
                  <div className="text-xs bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Cơ chế Dược lý học:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.mechanism}
                    </p>
                  </div>

                  {/* Clinical Impact */}
                  <div className="text-xs p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-0.5">
                    <span className="text-[10px] font-bold text-rose-800 dark:text-rose-300 uppercase block">
                      Hậu quả Lâm sàng:
                    </span>
                    <p className="text-rose-900 dark:text-rose-200 font-medium leading-relaxed">
                      {item.clinicalImpact}
                    </p>
                  </div>

                  {/* Action & Management */}
                  <div className="text-xs p-2.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/60 space-y-0.5">
                    <span className="text-[10px] font-bold text-teal-800 dark:text-teal-300 uppercase block">
                      Xử trí & Can thiệp Dược lâm sàng:
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                      {item.management}
                    </p>
                  </div>

                  {/* Source */}
                  <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-700/40">
                    <span>Nguồn tham chiếu: <strong>{item.source}</strong></span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: SAFETY ALERTS */}
      {activeSubTab === 'alerts' && (
        <div className="space-y-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-[11px]">
            {[
              { key: 'all', label: 'Tất cả cảnh báo' },
              { key: 'nephrotoxicity', label: 'Độc thận (AKI)' },
              { key: 'ototoxicity', label: 'Độc tai' },
              { key: 'qt_prolongation', label: 'Kéo dài QT' },
              { key: 'cdad', label: 'Viêm ruột C. diff' },
              { key: 'pregnancy', label: 'Mang thai & Cho con bú' },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedAlertCategory(cat.key)}
                className={`px-2.5 py-1 rounded-full font-semibold flex-shrink-0 transition ${
                  selectedAlertCategory === cat.key
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Alerts Cards */}
          <div className="space-y-3">
            {filteredAlerts.map((alert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
                  <div className="flex items-center gap-2">
                    {getAlertIcon(alert.icon)}
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      {alert.title}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {alert.source}
                  </span>
                </div>

                {alert.highRiskDrugs && (
                  <div className="text-xs">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                      Các thuốc nguy cơ cao:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {alert.highRiskDrugs.map((d, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-[11px] font-medium border border-rose-200 dark:border-rose-900">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {alert.safeDrugs && (
                  <div className="text-xs space-y-1.5">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-emerald-600 block mb-1">
                        Thuốc an toàn tương đối trong thai kỳ:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {alert.safeDrugs.map((d, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[11px] font-medium border border-emerald-200 dark:border-emerald-900">
                            ✓ {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase text-rose-600 block mb-1">
                        Thuốc CHỐNG CHỈ ĐỊNH hoặc nguy cơ cao cho thai nhi:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {alert.contraindicatedDrugs.map((d, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-[11px] font-medium border border-rose-200 dark:border-rose-900">
                            ✕ {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {alert.pathology && (
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl">
                    <strong>Bệnh sinh / Biểu hiện:</strong> {alert.pathology}
                  </div>
                )}

                <div className="text-xs p-2.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900">
                  <span className="text-[10px] font-bold text-teal-800 dark:text-teal-300 uppercase block mb-0.5">
                    Biện pháp Dự phòng & Theo dõi An toàn:
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-[11px]">
                    {alert.prevention}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
