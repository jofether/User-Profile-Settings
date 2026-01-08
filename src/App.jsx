import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('General');

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>

        <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* LEFT SIDE: Vertical Navigation Tabs */}
          <aside className="w-full md:w-64 bg-gray-50 border-r border-gray-200">
            <nav className="flex flex-col">
              {['General', 'Password', 'Notifications', 'Billing', 'Integrations'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-left text-sm font-medium border-l-4 transition-colors
                    ${activeTab === tab 
                      ? 'border-indigo-600 text-indigo-700 bg-indigo-50' 
                      : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </aside>

          {/* RIGHT SIDE: Form Content Area */}
          <main className="flex-1 p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{activeTab} Information</h2>
            
            {/* Simple Form Example */}
            <form className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">Display Name</label>
                <input 
                  type="text" 
                  defaultValue="Jofether Mendoza"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="jofether@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea 
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  defaultValue="Computer Science student researching UI bug diagnosis."
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                  Save Changes
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;