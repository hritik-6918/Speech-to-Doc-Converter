import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden border border-gray-800">
      <div className="px-6 py-4 bg-red-950/30 border-l-4 border-red-500/50 flex items-center space-x-3">
        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
        <p className="text-red-200">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;