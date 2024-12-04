import React, { useState } from 'react';
import { FileText, Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface TranscriptDisplayProps {
  transcript: string;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ transcript }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!transcript) return;
    
    const success = await copyToClipboard(transcript);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden border border-gray-800">
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-semibold text-white">Transcript</h2>
        </div>
        <div className="flex items-center space-x-4">
          {transcript && (
            <>
              <button
                onClick={handleCopy}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  copied
                    ? 'bg-green-900/30 text-green-400'
                    : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300'
                } border border-gray-700`}
                title={copied ? 'Copied!' : 'Copy to clipboard'}
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <span className="text-sm text-gray-400">
                {transcript.split(' ').length} words
              </span>
            </>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="min-h-[200px] p-6 bg-gray-950/50 rounded-xl border border-gray-800">
          {transcript ? (
            <p className="whitespace-pre-wrap text-gray-300 leading-relaxed">
              {transcript}
            </p>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
              <p className="text-gray-500">No transcript yet</p>
              <p className="text-sm text-gray-600">
                Click the microphone button and start speaking
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranscriptDisplay;