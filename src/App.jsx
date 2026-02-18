import React, { useState } from 'react';
import {
  Sidebar,
  GeneralTab,
  SecurityTab,
  NotificationsTab,
  PrivacyTab,
  BillingTab,
  Header,
  SuccessMessage,
} from './components';

function App() {
  const [activeTab, setActiveTab] = useState('General');
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const tabs = [
    { name: 'General', icon: '👤', color: 'indigo' },
    { name: 'Security', icon: '🔒', color: 'blue' },
    { name: 'Notifications', icon: '🔔', color: 'purple' },
    { name: 'Privacy', icon: '👁️', color: 'green' },
    { name: 'Billing', icon: '💳', color: 'orange' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return <GeneralTab onSave={handleSave} />;
      case 'Security':
        return <SecurityTab onSave={handleSave} />;
      case 'Notifications':
        return <NotificationsTab onSave={handleSave} />;
      case 'Privacy':
        return <PrivacyTab onSave={handleSave} />;
      case 'Billing':
        return <BillingTab onSave={handleSave} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 font-sans">
      {/* [BUG - LAYERS] Wrong z-index causing overlap | [FIX] Change z-99 to z-10 */}
      <div className="max-w-6xl mx-auto relative z-99">
        
        {/* Header */}
        <Header />

        {/* Success Message */}
        <SuccessMessage visible={savedMessage} />

        {/* Main Container */}
        {/* [BUG - LAYOUT] Flex direction reversed, content flows wrong | [FIX] Change flex-col-reverse to flex-col */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row min-h-screen">
          
          {/* Sidebar Navigation */}
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

          {/* Main Content Area */}
          <main className="flex-1 p-8 lg:p-12 overflow-y-auto max-h-screen">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{activeTab}</h2>
              <p className="text-gray-500 mb-8">Manage your {activeTab.toLowerCase()} settings and preferences</p>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                {renderTabContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;