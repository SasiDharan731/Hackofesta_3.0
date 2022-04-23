import React, { useRef, useEffect, useState } from 'react';

function Camera() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPic, setHasPic] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height: 1080 },
            })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getVideo();
    }, videoRef);
    return (
        <div>
            <div className="">
                <video ref={videoRef}></video>
            </div>
        </div>
    );
}

export default Camera;
