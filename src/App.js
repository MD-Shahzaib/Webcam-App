import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaBlob, setMediaBlob] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  const toggleRecording = () => {
    if (!recording) {
      setRecording(true);
      const chunks = [];
      const stream = webcamRef.current.stream;
      //   const mediaRecorder = new MediaRecorder(stream);

      //   mediaRecorder.ondataavailable = (e) => {
      //     chunks.push(e.data);
      //   };

      //   mediaRecorder.onstop = () => {
      //     const blob = new Blob(chunks, { type: 'video/webm' });
      //     setMediaBlob(blob);
      //     setRecording(false);
      //   };

      //   mediaRecorder.start();
      // } else {
      //   mediaRecorder.stop();
    }
  };

  const downloadMedia = () => {
    const url = URL.createObjectURL(mediaBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recording.webm';
    link.click();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Webcam App</h1>
      <div className="flex flex-col items-center">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="border border-gray-500 mb-4"
        />
        <div className="flex mb-4">
          {!recording ? (
            <button
              onClick={captureImage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Take Photo
            </button>
          ) : (
            <button
              onClick={toggleRecording}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Stop Recording
            </button>
          )}
          <button
            onClick={toggleRecording}
            className={`ml-4 ${recording
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-green-500 hover:bg-green-700'
              } text-white font-bold py-2 px-4 rounded`}
          >
            {recording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
        {imageSrc && (
          <img src={imageSrc} alt="Captured" className="mb-4" />
        )}
        {mediaBlob && (
          <div>
            <video
              src={URL.createObjectURL(mediaBlob)}
              controls
              className="mb-4"
            />
            <button
              onClick={downloadMedia}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
