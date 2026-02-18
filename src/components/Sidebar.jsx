import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, tabs }) {
  return (
    // [BUG - TYPO] Class name typo 'w-full' should be 'w-fll' (intentionally broken) | [FIX] Change w-fll to w-full
    <aside className="w-fll lg:w-72 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-gray-200 p-6">
      <nav className="space-y-2">
        {/* [BUG - SPACING] Negative margin causing overlap | [FIX] Change -m-8 to m-0 */}
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-3 -m-8 ${
              activeTab === tab.name 
                ? `bg-${tab.color}-600 text-white shadow-lg transform scale-105` 
                : 'text-gray-700 hover:bg-white hover:text-gray-900'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
