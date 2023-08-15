import React from 'react';
import CameraView from './components/CameraView';
import PhotoCapture from './components/PhotoCapture';
import VideoRecording from './components/VideoRecording';

function App() {
  const handleCameraError = (errorMessage) => {
    alert('Please! Connect Your Camera: ' + errorMessage);
    console.error(errorMessage);
  };

  return (
    <div className="bg-slate-200 p-4">
      <div className="max-w-xl mx-auto p-4 bg-slate-300 rounded shadow-lg shadow-slate-500">
        <h1 className="text-3xl font-semibold mb-4">React Webcam App</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Camera View</h2>
          <CameraView onError={handleCameraError} />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Photo Capture</h2>
          <PhotoCapture />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Video Recording</h2>
          <VideoRecording />
        </div>
      </div>
    </div>
  );
}

export default App;