import React, { useEffect, useRef, useState } from 'react';

const CameraView = ({ onError }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const constraints = { video: true };
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => {
                onError(err.message);
            });
    }, [onError]);

    return (
        <div>
            <video ref={videoRef} autoPlay />
        </div>
    );
};

export default CameraView;
