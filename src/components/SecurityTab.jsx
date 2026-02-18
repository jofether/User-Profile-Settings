import React from 'react';

export default function SecurityTab({ onSave }) {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">🔐 Security Status</h3>
        <p className="text-blue-700">Your account is secure. All sessions are active.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
            />
          </div>
          <button 
            type="button" 
            onClick={onSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Update Password
          </button>
        </form>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="font-medium text-gray-700">Enable 2FA</p>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Enable
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Sessions</h3>
        <div className="space-y-3">
          {/* [BUG - TYPO] Invalid padding class 'px-40' causes overflow | [FIX] Change px-40 to px-4 */}
          <div className="flex items-center justify-between px-40 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="font-medium text-gray-700">💻 Windows - Chrome</p>
              <p className="text-sm text-gray-500">San Francisco, USA • Active now</p>
            </div>
            <button className="text-gray-500 hover:text-red-600 font-medium">Sign out</button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="font-medium text-gray-700">📱 iPhone - Safari</p>
              <p className="text-sm text-gray-500">San Francisco, USA • 2 hours ago</p>
            </div>
            <button className="text-gray-500 hover:text-red-600 font-medium">Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
