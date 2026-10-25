import React, { useState } from 'react';
import { DRUGS_DATA } from '../../data/drugsData';
import { usePatient } from '../../context/PatientContext';
import { Search, ChevronRight, AlertTriangle } from 'lucide-react';

export function DrugsTab({ onNavigateToCalculators }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { metrics, setSelectedDrugForModal } = usePatient();

  const crClNum = parseFloat(metrics.crCl);

  const filteredDrugs = DRUGS_DATA.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {/* Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <span className="text-teal-600 dark:text-teal-400">●</span> Dược thư Kháng sinh & Chỉnh liều
        </h2>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Chỉnh liều thận (CrCl, HD, CRRT) & TDM theo Sanford
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm tên thuốc (vd: Meropenem, Cefepime, Vanco...)"
          className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
      </div>

      {/* Dynamic Active Patient Banner */}
      <div className="p-2.5 rounded-xl bg-teal-50/70 dark:bg-slate-800/80 border border-teal-200 dark:border-teal-900 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          <span className="text-slate-600 dark:text-slate-300">
            Đang tính liều cho CrCl: <strong className="text-teal-700 dark:text-teal-300 font-bold">{metrics.crCl} mL/min</strong>
          </span>
        </div>
        <button
          onClick={onNavigateToCalculators}
          className="text-teal-600 dark:text-teal-400 font-bold text-[11px] hover:underline"
        >
          Chỉnh thông số
        </button>
      </div>

      {/* Drug Cards List */}
      <div className="space-y-2.5">
        {filteredDrugs.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-6">Không tìm thấy kháng sinh phù hợp.</p>
        ) : (
          filteredDrugs.map((drug) => {
            let tailoredDose = drug.renalDose.crcl50;
            let doseBadge = 'Liều thường';
            let badgeClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';

            if (crClNum < 20) {
              tailoredDose = drug.renalDose.crcl_under20;
              doseBadge = 'Đã giảm liều (CrCl < 20)';
              badgeClass = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300';
            } else if (crClNum < 50) {
              tailoredDose = drug.renalDose.crcl20_50;
              doseBadge = 'Đã giảm liều (CrCl 20-50)';
              badgeClass = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
            }

            return (
              <div
                key={drug.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      {drug.name}
                      <span className="text-[10px] font-normal text-slate-400">({drug.brand})</span>
                    </h3>
                    <p className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                      {drug.class}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedDrugForModal(drug)}
                    className="p-1 px-2 rounded-lg bg-teal-50 dark:bg-slate-700 text-teal-700 dark:text-teal-300 text-[11px] font-semibold hover:bg-teal-100 flex items-center gap-1"
                  >
                    Chi tiết <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Patient-tailored dose */}
                <div className="p-2 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-teal-800 dark:text-teal-300 uppercase">
                      Gợi ý liều cho bệnh nhân hiện tại:
                    </span>
                    <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${badgeClass}`}>
                      {doseBadge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                    {tailoredDose}
                  </p>
                </div>

                {/* Quick tiers breakdown */}
                <div className="text-[11px] space-y-0.5 text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex justify-between">
                    <span>• CrCl &gt; 50 mL/min:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{drug.renalDose.crcl50}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• CrCl 20 - 50 mL/min:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{drug.renalDose.crcl20_50}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• CrCl &lt; 20 mL/min:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{drug.renalDose.crcl_under20}</span>
                  </div>
                </div>

                {/* Pearl */}
                <div className="text-[10px] bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Sanford Pearl:</strong> {drug.pearl}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
