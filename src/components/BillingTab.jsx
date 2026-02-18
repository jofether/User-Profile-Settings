import React from 'react';

export default function BillingTab({ onSave }) {
  return (
    <div className="space-y-8">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">💳 Current Plan</h3>
          <p className="text-orange-700 font-semibold text-2xl">Pro Annual</p>
        </div>
        <div className="text-right">
          <p className="text-orange-600 font-semibold">$99/year</p>
          <p className="text-sm text-orange-600">Renews on Feb 18, 2027</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Plan Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { feature: '✅ Unlimited Projects', included: true },
            { feature: '✅ Priority Support', included: true },
            { feature: '✅ Advanced Analytics', included: true },
            { feature: '✅ API Access', included: true },
            { feature: '✅ Team Collaboration', included: true },
            { feature: '✅ Custom Domain', included: true },
          ].map((item, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${item.included ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
              <p className={item.included ? 'text-green-700 font-medium' : 'text-gray-500 line-through'}>
                {item.feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white mb-4">
          <p className="text-2xl font-semibold tracking-wider mb-4">•••• •••• •••• 4242</p>
          <div className="flex justify-between">
            <div>
              <p className="text-sm opacity-75">Card Holder</p>
              <p className="font-medium">Jofether Mendoza</p>
            </div>
            <div>
              <p className="text-sm opacity-75">Expires</p>
              <p className="font-medium">02/28</p>
            </div>
          </div>
        </div>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-medium">
          Update Payment Method
        </button>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Billing History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Amount</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: 'Feb 18, 2025', desc: 'Pro Annual Subscription', amount: '$99.00', status: 'Paid' },
                { date: 'Feb 18, 2024', desc: 'Pro Annual Subscription', amount: '$99.00', status: 'Paid' },
                { date: 'Mar 15, 2024', desc: 'Refund - Overage Credits', amount: '-$15.00', status: 'Processed' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{row.date}</td>
                  <td className="px-4 py-3 text-gray-700">{row.desc}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.amount}</td>
                  <td className="px-4 py-3"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
