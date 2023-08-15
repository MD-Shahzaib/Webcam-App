import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const VideoRecording = () => {
    const webcamRef = useRef(null);
    const [recording, setRecording] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const startRecording = () => {
        setRecording(true);
        setRecordedChunks([]);
    };

    const stopRecording = () => {
        setRecording(false);
    };

    // const handleDataAvailable = (event) => {
    //     if (event.data.size > 0) {
    //         setRecordedChunks((prev) => prev.concat(event.data));
    //     }
    // };

    const downloadVideo = () => {
        if (recordedChunks.length > 0) {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'recorded_video.webm';
            link.click();
        }
    };

    return (
        <div>
            <Webcam ref={webcamRef} />
            {!recording ? (
                <button onClick={startRecording}>Start Recording</button>
            ) : (
                <button onClick={stopRecording}>Stop Recording</button>
            )}
            {recordedChunks.length > 0 && (
                <div>
                    <video controls>
                        <source src={URL.createObjectURL(new Blob(recordedChunks))} type="video/webm" />
                    </video>
                    <button onClick={downloadVideo}>Download Video</button>
                </div>
            )}
        </div>
    );
};

export default VideoRecording;
