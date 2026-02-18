import React from 'react';

export default function NotificationsTab({ onSave }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">Customize how you receive notifications across all your devices.</p>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Email Notifications</h3>
        
        <div className="space-y-3">
          {[
            { title: 'News & Updates', desc: 'Get the latest product news and updates' },
            { title: 'Activity Digest', desc: 'Weekly summary of your account activity' },
            { title: 'Security Alerts', desc: 'Important alerts about account security' },
            { title: 'Team Invitations', desc: 'Notifications when you are invited to teams' },
            { title: 'Comments & Mentions', desc: 'Someone commented on your work' },
          ].map((item, idx) => (
            <label key={idx} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-purple-50 cursor-pointer transition">
              <input 
                type="checkbox" 
                defaultChecked={idx % 2 === 0}
                className="w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
              />
              <div className="ml-3 flex-1">
                <p className="font-medium text-gray-700">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Push Notifications</h3>
        {/* [BUG - LAYERS] Absolute positioning without proper parent context | [FIX] Remove absolute or fix positioning context */}
        <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-200 absolute">
          <div>
            <p className="font-medium text-gray-700">Enable push notifications</p>
            <p className="text-sm text-gray-600">Get notified on your devices in real-time</p>
          </div>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
      </div>

      <div className="pt-4 flex justify-end">
        <button 
          type="button" 
          onClick={onSave}
          className="bg-purple-600 text-white px-8 py-2 rounded-lg hover:bg-purple-700 transition font-medium"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
