import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, tabs }) {
  return (
    <aside className="w-full lg:w-72 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-gray-200 p-6">
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-3 ${
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
