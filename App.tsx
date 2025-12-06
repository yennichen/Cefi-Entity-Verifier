
import React, { useState, useCallback } from 'react';
import { verifyWebsite } from './services/geminiService';
import { UrlInputForm } from './components/UrlInputForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Header } from './components/Header';
import { InitialState } from './components/InitialState';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleVerify = useCallback(async () => {
    if (!url || !url.startsWith('http')) {
      setError('Please enter a valid URL (e.g., https://example.com).');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await verifyWebsite(url);
      setResult(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Header />
        <main className="mt-8">
          <UrlInputForm
            url={url}
            setUrl={setUrl}
            onVerify={handleVerify}
            isLoading={isLoading}
          />

          {error && (
            <div className="mt-8 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg animate-fade-in">
              <h3 className="font-bold">Error</h3>
              <p>{error}</p>
            </div>
          )}

          <div className="mt-8">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center p-8 bg-gray-800/50 rounded-lg">
                <LoadingSpinner />
                <p className="mt-4 text-sky-400">AI is analyzing the website and checking registers...</p>
                <p className="mt-2 text-sm text-gray-400">This may take a moment.</p>
              </div>
            ) : result ? (
              <ResultsDisplay result={result} />
            ) : !error && (
              <InitialState />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
