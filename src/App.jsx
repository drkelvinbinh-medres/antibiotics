import React, { useState, useEffect } from 'react';
import { PatientProvider, usePatient } from './context/PatientContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DrugDetailModal } from './components/DrugDetailModal';
import { SyndromesTab } from './components/tabs/SyndromesTab';
import { MatrixTab } from './components/tabs/MatrixTab';
import { DrugsTab } from './components/tabs/DrugsTab';
import { InteractionsTab } from './components/tabs/InteractionsTab';
import { CalculatorsTab } from './components/tabs/CalculatorsTab';
import { EnglishTab } from './components/tabs/EnglishTab';
import { Smartphone, Monitor } from 'lucide-react';

function AppContent() {
  const [activeTab, setActiveTab] = useState('syndromes');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState('phone'); // 'phone' | 'fullscreen'
  const { selectedDrugForModal, setSelectedDrugForModal } = usePatient();
  const [liveTime, setLiveTime] = useState('22:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      setLiveTime(`${h}:${m}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'phone' ? 'fullscreen' : 'phone');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center py-2 sm:py-6 px-1 sm:px-4 transition-colors duration-200">
      
      {/* Top Device Bar & Quick Controls */}
      <div className="w-full max-w-5xl mb-3 flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></div>
          <span className="font-bold text-teal-800 dark:text-teal-300">AntiBacteria v1.1 PWA</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="hidden sm:inline">The Sanford Guide • Bộ Y tế VN • IDSA • BV Bệnh Nhiệt Đới</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleViewMode}
            className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 flex items-center gap-1.5 transition shadow-sm"
          >
            {viewMode === 'phone' ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-teal-600" />
                <span>Mở rộng Màn hình</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-teal-600" />
                <span>Mô phỏng Điện thoại</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main App Container */}
      <div
        className={`w-full bg-slate-50 dark:bg-slate-900 flex flex-col overflow-hidden relative border border-slate-300 dark:border-slate-800 transition-all duration-300 ${
          viewMode === 'phone'
            ? 'max-w-[430px] h-[870px] rounded-[38px] shadow-2xl ring-8 ring-slate-800 dark:ring-slate-950'
            : 'max-w-5xl h-[870px] rounded-3xl shadow-xl'
        }`}
      >
        {/* Dynamic Island & Phone Top Status (in phone view) */}
        {viewMode === 'phone' && (
          <div className="pt-3 px-6 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 select-none z-30">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{liveTime}</span>
            <div className="w-24 h-4 bg-slate-800 dark:bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-teal-500/80 mr-2"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
            </div>
            <span className="text-[11px] font-bold">Offline Ready</span>
          </div>
        )}

        {/* Header */}
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          onNavigateToCalculators={() => setActiveTab('calculators')}
        />

        {/* Scrollable Tab Content */}
        <main className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          {activeTab === 'syndromes' && <SyndromesTab />}
          {activeTab === 'matrix' && <MatrixTab />}
          {activeTab === 'drugs' && <DrugsTab onNavigateToCalculators={() => setActiveTab('calculators')} />}
          {activeTab === 'interactions' && <InteractionsTab />}
          {activeTab === 'calculators' && <CalculatorsTab />}
          {activeTab === 'english' && <EnglishTab />}
        </main>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />

        {/* iPhone Home Indicator (in phone view) */}
        {viewMode === 'phone' && (
          <div className="h-3.5 w-full flex items-center justify-center bg-white dark:bg-slate-900 pb-1">
            <div className="w-28 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          </div>
        )}
      </div>

      {/* Drug Details Quick Modal */}
      {selectedDrugForModal && (
        <DrugDetailModal
          drug={selectedDrugForModal}
          onClose={() => setSelectedDrugForModal(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <PatientProvider>
      <AppContent />
    </PatientProvider>
  );
}
