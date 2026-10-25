import React, { useState } from 'react';
import { CHORAY_2024_DATA } from '../../data/choRayData';
import { ShieldAlert, BookOpen, AlertCircle, ArrowRight, Activity, Sparkles, Filter } from 'lucide-react';

export function ChoRayReferenceTab() {
  const [subSection, setSubSection] = useState('renalTable'); // 'renalTable' | 'mdrProtocols' | 'pkpdPrinciples'
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDosing = CHORAY_2024_DATA.renalDosingTable.filter(d =>
    d.drug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/40 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-800 space-y-1.5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-600 text-white shadow-sm">
              BV Chợ Rẫy 2024
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              Sách Hướng dẫn Sử dụng Kháng sinh
            </span>
          </div>
          <span className="text-[10px] font-medium text-purple-700 dark:text-purple-300">
            NXB Y học 2024
          </span>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Chủ biên:</strong> {CHORAY_2024_DATA.metadata.chiefEditors}. Hướng dẫn thực hành điều trị nhiễm khuẩn nặng, vi khuẩn đa kháng và toàn kháng (MDR/XDR/PDR) tại bệnh viện tuyến cuối hạng đặc biệt.
        </p>
      </div>

      {/* Sub-section Switcher */}
      <div className="grid grid-cols-2 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setSubSection('renalTable')}
          className={`py-1.5 rounded-lg transition text-center ${
            subSection === 'renalTable'
              ? 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-sm font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Bảng Chỉnh liều Thận & CRRT
        </button>
        <button
          onClick={() => setSubSection('mdrProtocols')}
          className={`py-1.5 rounded-lg transition text-center ${
            subSection === 'mdrProtocols'
              ? 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-sm font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Phác đồ Siêu đa kháng (XDR)
        </button>
      </div>

      {/* SUB-SECTION 1: BẢNG CHỈNH LIỀU THẬN & CRRT */}
      {subSection === 'renalTable' && (
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm thuốc (vd: Colistin, Meropenem, Vancomycin, Sulbactam...)"
              className="w-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-3">
            {filteredDosing.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-purple-200/80 dark:border-purple-900/60 shadow-sm space-y-2.5"
              >
                <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-700/60 pb-2">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                      {item.drug}
                    </h3>
                    <span className="text-[10px] text-purple-700 dark:text-purple-300 font-medium">
                      {item.unitNote}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300">
                    Chợ Rẫy 2024
                  </span>
                </div>

                {/* Loading dose */}
                <div className="p-2 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 text-xs">
                  <strong className="text-purple-800 dark:text-purple-300 text-[10px] uppercase block mb-0.5">
                    Liều nạp khởi đầu (Loading Dose):
                  </strong>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold">{item.loadingDose}</p>
                </div>

                {/* CrCl Tiers Grid */}
                <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between py-0.5 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="font-semibold">• CrCl &gt; 50 mL/min:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.crclNormal}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="font-semibold">• CrCl 30 - 49 mL/min:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.crcl30_49}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="font-semibold">• CrCl 10 - 29 mL/min:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.crcl10_29}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="font-semibold">• CrCl &lt; 10 mL/min:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.crclUnder10}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/60 dark:border-slate-800">
                    <span className="font-semibold text-amber-700 dark:text-amber-400">• Lọc máu ngắt quãng (HD):</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.hd}</span>
                  </div>
                  <div className="flex justify-between py-0.5">
                    <span className="font-semibold text-rose-700 dark:text-rose-400">• Lọc máu liên tục (CRRT):</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.crrt}</span>
                  </div>
                </div>

                {/* Cho Ray Pearl */}
                <div className="p-2 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/50 text-[11px] text-slate-700 dark:text-slate-300">
                  💡 <strong>Kinh nghiệm BV Chợ Rẫy:</strong> {item.choRayPearl}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-SECTION 2: PHÁC ĐỒ SIÊU ĐA KHÁNG (MDR/XDR) */}
      {subSection === 'mdrProtocols' && (
        <div className="space-y-3">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold text-purple-800 dark:text-purple-300 block mb-0.5">
              Đặc thù vi sinh tại Bệnh viện Chợ Rẫy:
            </span>
            Tỷ lệ <em>Acinetobacter baumannii</em> kháng Carbapenem (CRAB) tại các ICU Chợ Rẫy đạt &gt; 85%, tỷ lệ <em>K. pneumoniae</em> kháng Carbapenem (CRKP) tiết men NDM và OXA-48 rất cao. Phác đồ phối hợp đa mô thức (Combination Therapy) là bắt buộc.
          </div>

          <div className="space-y-3">
            {CHORAY_2024_DATA.multidrugResistantProtocols.map((proto) => (
              <div
                key={proto.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-purple-200 dark:border-purple-800 shadow-sm space-y-2.5"
              >
                <div className="border-b border-slate-100 dark:border-slate-700/60 pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-extrabold text-purple-900 dark:text-purple-200">
                      {proto.pathogen}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300">
                      BV Chợ Rẫy 2024
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">Bệnh cảnh: {proto.clinicalSetting}</span>
                </div>

                {/* First-line regimen */}
                <div className="p-2.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-purple-800 dark:text-purple-300 block">
                    Phác đồ Phối hợp Lựa chọn Hàng đầu (First-line):
                  </span>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                    {proto.firstLineRegimen}
                  </p>
                </div>

                {/* Alternative regimen */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700 space-y-0.5">
                  <span className="text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400 block">
                    Phác đồ Thay thế (Alternative):
                  </span>
                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    {proto.alternativeRegimen}
                  </p>
                </div>

                {/* Pearl */}
                <div className="text-[11px] p-2 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900 text-slate-700 dark:text-slate-300 leading-relaxed">
                  💡 <strong>Kinh nghiệm thực chiến Chợ Rẫy:</strong> {proto.pearl}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
