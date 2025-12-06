
import React from 'react';
import { ShieldCheckIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        <ShieldCheckIcon className="h-10 w-10 text-sky-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          CeFi Entity Verifier
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Enter an entity's official website URL. Our AI assistant will analyze its compliance claims and verify them against official registers.
      </p>
    </header>
  );
};
