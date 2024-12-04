import React from 'react';
import { Mic } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="gradient-bg text-white py-8 px-4 shadow-lg border-b border-indigo-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
            <Mic className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-white">
            Speech to Doc
          </h1>
        </div>
        <p className="text-indigo-200/80 max-w-2xl">
          Transform your voice into text instantly. Start speaking and watch your words come to life.
        </p>
      </div>
    </header>
  );
};

export default Header;