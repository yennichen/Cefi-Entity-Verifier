
import React from 'react';
import { SearchIcon } from './Icons';

interface UrlInputFormProps {
  url: string;
  setUrl: (url: string) => void;
  onVerify: () => void;
  isLoading: boolean;
}

export const UrlInputForm: React.FC<UrlInputFormProps> = ({ url, setUrl, onVerify, isLoading }) => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 p-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="relative flex-grow w-full">
            <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.example-exchange.com"
            className="w-full pl-4 pr-4 py-3 bg-gray-900 text-gray-200 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 placeholder-gray-500"
            disabled={isLoading}
            />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-sky-600 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-sky-500 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Verifying...' : 'Verify'}
          {!isLoading && <SearchIcon className="h-5 w-5" />}
        </button>
      </form>
    </div>
  );
};
