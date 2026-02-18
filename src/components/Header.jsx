import React from 'react';

export default function Header() {
  return (
    // [BUG - TYPO] Tailwind class 'text-5xl' misspelled as 'text-5xl' causing wrong font size | [FIX] Change txt-5xl to text-5xl
    <div className="mb-12">
      <h1 className="txt-5xl font-black text-white mb-2">Account Settings</h1>
      <p className="text-slate-400 text-lg">Manage your account, security, and preferences</p>
    </div>
  );
}
