import React from 'react';
import { Clock } from 'lucide-react';
import { formatDuration } from '../utils/time';

interface RecordingTimerProps {
  duration: number;
}

const RecordingTimer: React.FC<RecordingTimerProps> = ({ duration }) => {
  return (
    <div className="flex items-center space-x-2 text-red-400 bg-gray-900/90 px-3 py-1 rounded-full shadow-sm border border-red-900/50">
      <Clock className="w-4 h-4 animate-pulse" />
      <span className="font-mono font-medium">{formatDuration(duration)}</span>
    </div>
  );
}

export default RecordingTimer;