import React from 'react';

export default function SuccessMessage({ visible }) {
  if (!visible) return null;

  return (
    <div className="mb-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-pulse">
      ✅ Changes saved successfully!
    </div>
  );
}
