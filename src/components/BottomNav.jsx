import React from 'react';
import { ClipboardList, Grid3X3, Pill, ShieldAlert, Calculator, BookOpen } from 'lucide-react';

export function BottomNav({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'syndromes', label: 'Phác đồ', icon: ClipboardList },
    { id: 'matrix', label: 'Phổ Sanford', icon: Grid3X3 },
    { id: 'drugs', label: 'Kháng sinh', icon: Pill },
    { id: 'interactions', label: 'Tương tác', icon: ShieldAlert },
    { id: 'calculators', label: 'Máy tính', icon: Calculator },
    { id: 'english', label: 'Học tập & BVBND', icon: BookOpen },
  ];

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 px-1 py-1.5 grid grid-cols-6 z-30 select-none shadow-lg">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 transition ${
              isActive
                ? 'text-teal-600 dark:text-teal-400 font-bold'
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium'
            }`}
          >
            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-0.5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
            <span className="text-[9px] sm:text-[10px] truncate max-w-full text-center">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
