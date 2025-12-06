
import React from 'react';

interface ResultsDisplayProps {
  result: string;
}

const SimpleMarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');

  const renderLine = (line: string, index: number) => {
    // Make URLs clickable
    line = line.replace(/(https?:\/\/[^\s]+)/g, (url) => {
      // Avoid creating links for image URLs inside markdown
      if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
          return url;
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline inline-flex items-center gap-1 break-all">${url} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`;
    });
    
    // Bold text
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-sky-400">$1</strong>');
    
    // Headings
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-2xl font-bold mt-6 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 border-b border-gray-700 pb-2">{line.substring(4)}</h3>;
    }
     if (line.startsWith('#### ')) {
      return <h4 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-100">{line.substring(5)}</h4>;
    }
    
    // List items with nesting
    const trimmedLine = line.trimStart();
    if (trimmedLine.startsWith('- ')) {
        const indentation = line.length - trimmedLine.length;
        // Simple nesting based on indentation (2 spaces per level)
        let marginLeft = 'ml-5'; // Level 1
        if (indentation >= 2 && indentation < 4) {
          marginLeft = 'ml-10'; // Level 2
        } else if (indentation >= 4) {
          marginLeft = 'ml-16'; // Level 3
        }
        return <li key={index} className={`list-disc ${marginLeft}`} dangerouslySetInnerHTML={{ __html: trimmedLine.substring(2) }} />;
    }
    
    if (line.trim() === '') {
        return <div key={index} className="h-4"></div>; // Render a small space for empty lines
    }

    return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: line }} />;
  };

  return (
    <div>
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
};

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 p-6 md:p-8 rounded-lg shadow-2xl animate-fade-in space-y-4">
       <SimpleMarkdownRenderer content={result} />
    </div>
  );
};
