import React from 'react';
import { Mic, MicOff, Download, RefreshCw } from 'lucide-react';
import RecordingTimer from './RecordingTimer';

interface ControlsProps {
  isListening: boolean;
  transcript: string;
  duration: number;
  onStartListening: () => void;
  onStopListening: () => void;
  onReset: () => void;
  onDownload: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isListening,
  transcript,
  duration,
  onStartListening,
  onStopListening,
  onReset,
  onDownload,
}) => {
  return (
    <div className="relative">
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-lg p-6 relative z-10 border border-gray-800">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <button
              onClick={isListening ? onStopListening : onStartListening}
              className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                isListening
                  ? 'bg-red-500/90 hover:bg-red-600/90 border-red-400/20'
                  : 'bg-indigo-600/90 hover:bg-indigo-700/90 border-indigo-400/20'
              } border`}
            >
              {isListening ? (
                <MicOff className="w-8 h-8 text-white" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
              {isListening && (
                <div className="absolute inset-0 rounded-full border-4 border-red-500/30"
                     style={{ animation: 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite' }} />
              )}
            </button>
            {isListening && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <RecordingTimer duration={duration} />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button
              onClick={onReset}
              disabled={!transcript}
              className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 border border-gray-700"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </button>

            <button
              onClick={onDownload}
              disabled={!transcript}
              className="px-4 py-2 rounded-lg bg-indigo-900/50 hover:bg-indigo-800/50 text-indigo-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 border border-indigo-800"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;