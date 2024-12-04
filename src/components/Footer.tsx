import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/30 py-6 mt-auto border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            Created by{' '}
            <span className="font-semibold text-indigo-400">hritik@6918💖</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;