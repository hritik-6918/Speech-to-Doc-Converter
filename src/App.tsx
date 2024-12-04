import React from 'react';
import 'regenerator-runtime/runtime';
import Header from './components/Header';
import Controls from './components/Controls';
import TranscriptDisplay from './components/TranscriptDisplay';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import { useSpeechToDoc } from './hooks/useSpeechToDoc';

function App() {
  const {
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
  } = useSpeechToDoc();

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Header />
        <div className="max-w-4xl mx-auto p-6 mt-8 flex-grow">
          <ErrorMessage message="Sorry, your browser doesn't support speech recognition. Please try using a modern browser like Chrome." />
        </div>
        <Footer />
      </div>
    );
  }

  if (!isMicrophoneAvailable) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Header />
        <div className="max-w-4xl mx-auto p-6 mt-8 flex-grow">
          <ErrorMessage message="Microphone access is required for speech recognition. Please ensure you have a microphone connected and try again." />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Header />
      
      <main className="max-w-4xl mx-auto p-6 space-y-8 flex-grow">
        {error && <ErrorMessage message={error} />}
        
        <Controls
          isListening={isListening}
          transcript={transcript}
          duration={duration}
          onStartListening={startListening}
          onStopListening={stopListening}
          onReset={reset}
          onDownload={downloadTranscript}
        />
        
        <TranscriptDisplay transcript={transcript} />
      </main>

      <Footer />
    </div>
  );
}

export default App;