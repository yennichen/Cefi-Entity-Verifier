
import React from 'react';
import { CubeTransparentIcon, GlobeAltIcon } from './Icons';

export const InitialState: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800/50 border border-gray-700/50 rounded-lg animate-fade-in">
        <div className="flex justify-center items-center gap-4">
             <GlobeAltIcon className="h-12 w-12 text-gray-500" />
             <div className="text-5xl font-thin text-gray-600">→</div>
             <CubeTransparentIcon className="h-12 w-12 text-gray-500" />
        </div>
      <h2 className="mt-6 text-2xl font-semibold text-gray-300">Ready for Verification</h2>
      <p className="mt-2 max-w-2xl mx-auto text-gray-400">
        Enter the official website URL of a centralized exchange, broker, or wallet provider to begin the AI-driven compliance and registration check.
      </p>
      <div className="mt-6 text-left max-w-md mx-auto bg-gray-900/50 p-4 rounded-md">
        <p className="text-sm font-semibold text-gray-400">Example URLs:</p>
        <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
            <li>https://www.coinbase.com</li>
            <li>https://www.kraken.com</li>
            <li>https://www.gemini.com</li>
        </ul>
      </div>
    </div>
  );
};
