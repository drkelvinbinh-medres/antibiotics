import React, { useState } from 'react';
import { VOCAB_DATA, SENTENCES_DATA } from '../../data/englishData';
import { BvbndReferenceTab } from './BvbndReferenceTab';
import { ChoRayReferenceTab } from './ChoRayReferenceTab';
import { BookOpen, Sparkles, Volume2, BookmarkCheck, GitBranch, Building2 } from 'lucide-react';

export function EnglishTab() {
  const [subTab, setSubTab] = useState('choray'); // 'choray' | 'bvbnd' | 'vocab' | 'sentences'
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredVocab = selectedTag === 'all'
    ? VOCAB_DATA
    : VOCAB_DATA.filter(v => v.tag === selectedTag);

  return (
    <div className="space-y-3">
      {/* Sub-tab Switcher (4 Sub-modules) */}
      <div className="grid grid-cols-4 gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setSubTab('choray')}
          className={`py-1.5 rounded-lg transition text-center flex items-center justify-center gap-1 ${
            subTab === 'choray'
              ? 'bg-purple-600 text-white shadow-sm font-bold'
              : 'text-purple-700 dark:text-purple-300 hover:text-purple-800 font-semibold'
          }`}
        >
          <Building2 className="w-3 h-3 hidden sm:inline" />
          <span>Chợ Rẫy 2024</span>
        </button>

        <button
          onClick={() => setSubTab('bvbnd')}
          className={`py-1.5 rounded-lg transition text-center flex items-center justify-center gap-1 ${
            subTab === 'bvbnd'
              ? 'bg-emerald-600 text-white shadow-sm font-bold'
              : 'text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 font-semibold'
          }`}
        >
          <GitBranch className="w-3 h-3 hidden sm:inline" />
          <span>Nhiệt Đới eMed</span>
        </button>

        <button
          onClick={() => setSubTab('vocab')}
          className={`py-1.5 rounded-lg transition text-center ${
            subTab === 'vocab'
              ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Từ vựng
        </button>

        <button
          onClick={() => setSubTab('sentences')}
          className={`py-1.5 rounded-lg transition text-center ${
            subTab === 'sentences'
              ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          Mẫu câu
        </button>
      </div>

      {/* Sub-tab 1: BV Chợ Rẫy 2024 */}
      {subTab === 'choray' && (
        <ChoRayReferenceTab />
      )}

      {/* Sub-tab 2: BV Bệnh Nhiệt Đới eMed */}
      {subTab === 'bvbnd' && (
        <BvbndReferenceTab />
      )}

      {/* Sub-tab 3: Vocabulary Flashcards */}
      {subTab === 'vocab' && (
        <div className="space-y-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="text-teal-600 dark:text-teal-400">●</span> Medical English: Antimicrobial Vocabulary
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Thuật ngữ dược lực học, dược động học & quản lý kháng sinh (AMS)
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-[11px]">
            {[
              { key: 'all', label: 'Tất cả' },
              { key: 'pkpd', label: 'PK / PD Dược động học' },
              { key: 'stewardship', label: 'Quản lý KS (AMS)' },
              { key: 'resistance', label: 'Cơ chế Kháng thuốc' },
            ].map((tag) => (
              <button
                key={tag.key}
                onClick={() => setSelectedTag(tag.key)}
                className={`px-2.5 py-1 rounded-full font-semibold flex-shrink-0 transition ${
                  selectedTag === tag.key
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          <div className="space-y-2.5">
            {filteredVocab.map((v, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      {v.term}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">{v.ipa}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {v.vietnamese}
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl">
                  {v.definition}
                </p>

                <div className="text-[11px] p-2 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/50 space-y-0.5">
                  <span className="font-bold text-teal-800 dark:text-teal-300 text-[10px] block">
                    Ngữ cảnh lâm sàng (Clinical Context):
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 italic">
                    "{v.example}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 4: Sentences */}
      {subTab === 'sentences' && (
        <div className="space-y-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="text-teal-600 dark:text-teal-400">●</span> Academic Clinical Sentence Frames
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Mẫu câu học thuật chuẩn quốc tế dùng trong hội chẩn & viết bệnh án
            </p>
          </div>

          <div className="space-y-2.5">
            {SENTENCES_DATA.map((s, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2"
              >
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {s.category}
                </span>

                <div className="p-2.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/60 text-xs font-medium text-slate-900 dark:text-white leading-relaxed">
                  "{s.en}"
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed px-1">
                  <strong>Dịch nghĩa:</strong> {s.vi}
                </div>

                <div className="text-[10px] text-teal-700 dark:text-teal-400 font-mono bg-slate-50 dark:bg-slate-900 p-1.5 rounded-lg">
                  🔑 <strong>Cụm từ then chốt:</strong> {s.keyVocab}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
