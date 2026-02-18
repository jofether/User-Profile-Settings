import React from 'react';

export default function PrivacyTab({ onSave }) {
  return (
    <div className="space-y-8">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-2">👁️ Privacy Controls</h3>
        <p className="text-green-700">Manage who can see your profile and activities.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Visibility</h3>
        <div className="space-y-3">
          {[
            { label: 'Public', value: 'public', desc: 'Anyone can view your profile' },
            { label: 'Friends Only', value: 'friends', desc: 'Only your friends can view' },
            { label: 'Private', value: 'private', desc: 'Only you can view your profile' },
          ].map((option) => (
            <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition">
              <input 
                type="radio" 
                name="visibility"
                value={option.value}
                defaultChecked={option.value === 'friends'}
                className="w-4 h-4 text-green-600"
              />
              <div className="ml-3 flex-1">
                <p className="font-medium text-gray-700">{option.label}</p>
                <p className="text-sm text-gray-500">{option.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Data & Privacy</h3>
        <div className="space-y-3">
          {[
            { title: 'Allow search engines to index my profile', checked: false },
            { title: 'Share activity status', checked: true },
            { title: 'Allow direct messages from anyone', checked: true },
            { title: 'Show online status', checked: true },
          ].map((item, idx) => (
            <label key={idx} className="flex items-center p-3 hover:bg-green-50 rounded cursor-pointer">
              <input 
                type="checkbox" 
                defaultChecked={item.checked}
                className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-500"
              />
              <span className="ml-3 text-gray-700">{item.title}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Download Your Data</h3>
        <p className="text-gray-600 mb-4">Request a copy of your data in a portable format.</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium">
          Request Data Export
        </button>
      </div>

      <div className="pt-4 flex justify-end">
        <button 
          type="button" 
          onClick={onSave}
          className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Save Privacy Settings
        </button>
      </div>
    </div>
  );
}
