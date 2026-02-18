import React from 'react';

export default function GeneralTab({ onSave }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-6 pb-8 border-b border-gray-200">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-5xl shadow-lg">
          👨‍💻
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Jofether Mendoza</h3>
          <p className="text-gray-500 mt-1">@jofether_dev</p>
          <p className="text-sm text-gray-400 mt-2">Member since January 2023</p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
            <input 
              type="text" 
              defaultValue="Jofether"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
            <input 
              type="text" 
              defaultValue="Mendoza"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input 
            type="email" 
            defaultValue="jofether@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
          <input 
            type="text" 
            defaultValue="jofether_dev"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
          <textarea 
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            defaultValue="Full-stack developer passionate about creating beautiful and functional user interfaces. Coffee enthusiast and open-source contributor."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
          <input 
            type="text" 
            defaultValue="San Francisco, USA"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
          />
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="button" 
            onClick={onSave}
            className="bg-indigo-600 text-white px-8 py-2 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-sm font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
