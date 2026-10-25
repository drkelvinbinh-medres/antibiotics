import React, { useState } from 'react';
import { BUG_DRUG_MATRIX, PATHOGENS_HEADER } from '../../data/matrixData';
import { DRUGS_DATA } from '../../data/drugsData';
import { usePatient } from '../../context/PatientContext';
import { Lightbulb } from 'lucide-react';

export function MatrixTab() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const { setSelectedDrugForModal } = usePatient();

  const filteredMatrix = selectedGroup === 'all'
    ? BUG_DRUG_MATRIX
    : BUG_DRUG_MATRIX.filter(m => m.group === selectedGroup);

  const renderCell = (val) => {
    if (val === '●++') {
      return (
        <td className="p-2 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30">
          ●++
        </td>
      );
    }
    if (val === '●+') {
      return (
        <td className="p-2 font-bold text-teal-600 dark:text-teal-400 bg-teal-50/30 dark:bg-teal-950/20">
          ●+
        </td>
      );
    }
    if (val === '△+/-') {
      return (
        <td className="p-2 font-bold text-amber-600 dark:text-amber-400 bg-amber-50/30 dark:bg-amber-950/20">
          △+/-
        </td>
      );
    }
    return (
      <td className="p-2 text-slate-300 dark:text-slate-600 font-medium">
        ✕ 0
      </td>
    );
  };

  const handleRowClick = (drugName) => {
    const normalized = drugName.toLowerCase();
    const found = DRUGS_DATA.find(d =>
      d.name.toLowerCase().includes(normalized) ||
      d.brand.toLowerCase().includes(normalized)
    );
    if (found) setSelectedDrugForModal(found);
  };

  return (
    <div className="space-y-3">
      {/* Tab Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <span className="text-teal-600 dark:text-teal-400">●</span> Sanford Bug-Drug Matrix
        </h2>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Ma trận đối chiếu Kháng sinh vs Vi khuẩn lâm sàng
        </p>
      </div>

      {/* Legend Bar */}
      <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
        <div className="flex items-center justify-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 rounded py-1 px-1.5 border border-emerald-200 dark:border-emerald-800">
          <span className="text-xs font-black">●++</span> Ưu tiên (&gt;90%)
        </div>
        <div className="flex items-center justify-center gap-1 font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 rounded py-1 px-1.5 border border-teal-200 dark:border-teal-800">
          <span className="text-xs font-bold">●+</span> Có hoạt tính
        </div>
        <div className="flex items-center justify-center gap-1 font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 rounded py-1 px-1.5 border border-amber-200 dark:border-amber-800">
          <span className="text-xs font-bold">△+/-</span> Biến đổi/Trung bình
        </div>
        <div className="flex items-center justify-center gap-1 font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded py-1 px-1.5 border border-slate-200 dark:border-slate-700">
          <span className="text-xs font-bold">✕ 0</span> Kháng/Không tác dụng
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 hide-scrollbar">
        {[
          { key: 'all', label: 'Tất cả' },
          { key: 'gram_pos', label: 'Gram (+)' },
          { key: 'gram_neg', label: 'Gram (-)' },
          { key: 'pseudomonas', label: 'Pseudomonas/MDR' },
          { key: 'anaerobes', label: 'Kỵ khí' },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setSelectedGroup(btn.key)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex-shrink-0 transition ${
              selectedGroup === btn.key
                ? 'bg-teal-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Matrix Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-400">
                <th className="p-2 font-bold sticky left-0 bg-slate-100 dark:bg-slate-900 z-10 w-28">
                  Kháng sinh
                </th>
                {PATHOGENS_HEADER.map((p) => (
                  <th key={p.key} className="p-2 text-center" title={p.title}>
                    {p.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-center font-medium">
              {filteredMatrix.map((item, idx) => (
                <tr
                  key={idx}
                  onClick={() => handleRowClick(item.drug)}
                  className="hover:bg-slate-50 dark:hover:bg-slate-750 transition cursor-pointer"
                >
                  <td className="p-2 text-left font-bold text-slate-900 dark:text-slate-100 sticky left-0 bg-white dark:bg-slate-800 z-10 border-r border-slate-100 dark:border-slate-700">
                    <span className="hover:text-teal-600 underline">{item.drug}</span>
                  </td>
                  {renderCell(item.mssa)}
                  {renderCell(item.mrsa)}
                  {renderCell(item.spneu)}
                  {renderCell(item.efaec)}
                  {renderCell(item.ecoli)}
                  {renderCell(item.esbl)}
                  {renderCell(item.psaer)}
                  {renderCell(item.bfrag)}
                  {renderCell(item.atyp)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sanford Clinical Pearl */}
      <div className="p-3 rounded-2xl bg-teal-50 dark:bg-slate-800/80 border border-teal-200/80 dark:border-teal-900/50">
        <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 dark:text-teal-300 mb-1">
          <Lightbulb className="w-4 h-4 text-teal-600" />
          <span>Sanford Pearl: Nguyên lý vi sinh lâm sàng</span>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
          Kháng sinh in vitro nhạy cảm (Susceptible) dẫn đến đáp ứng lâm sàng thành công ở khoảng <strong>90%</strong> bệnh nhân. Kháng sinh in vitro kháng thuốc (Resistant) vẫn có thể cải thiện ở khoảng <strong>60%</strong> bệnh nhân nhờ hệ miễn dịch tự nhiên và can thiệp ngoại khoa dẫn lưu tháo mủ triệt để.
        </p>
      </div>
    </div>
  );
}
