import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const PhotoCapture = () => {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    };

    const downloadPhoto = () => {
        if (capturedImage) {
            const link = document.createElement('a');
            link.href = capturedImage;
            link.download = 'captured_photo.png';
            link.click();
        }
    };

    return (
        <div>
            <Webcam ref={webcamRef} screenshotFormat="image/png" />
            <button onClick={capturePhoto}>Capture Photo</button>
            {capturedImage && (
                <div>
                    <img src={capturedImage} alt="Captured" />
                    <button onClick={downloadPhoto}>Download Photo</button>
                </div>
            )}
        </div>
    );
};

export default PhotoCapture;
