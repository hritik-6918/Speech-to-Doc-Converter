import { useState, useCallback, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useSpeechToDoc = () => {
  const [isListening, setIsListening] = useState(false);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isListening) {
      interval = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isListening]);

  const startListening = useCallback(async () => {
    try {
      const permission = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (permission) {
        setIsListening(true);
        setError(null);
        SpeechRecognition.startListening({ continuous: true });
      }
    } catch (err) {
      setError('Microphone access denied. Please enable microphone access and try again.');
    }
  }, []);

  const stopListening = useCallback(() => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }, []);

  const reset = useCallback(() => {
    resetTranscript();
    setIsListening(false);
    setDuration(0);
    setError(null);
  }, [resetTranscript]);

  const downloadTranscript = useCallback(() => {
    if (!transcript) return;

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const element = document.createElement('a');
    const file = new Blob([transcript], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `transcript-${timestamp}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }, [transcript]);

  return {
    isListening,
    transcript,
    duration,
    error,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    startListening,
    stopListening,
    reset,
    downloadTranscript
  };
};