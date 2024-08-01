import { MutableRefObject, useEffect, useRef } from "react";

export default function NewMatchLive() {
    const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);

    useEffect(() => {
        // check for browser support
        if (!navigator.mediaDevices) {
            console.log("Your browser doesn't support camera access");
            return;
        }

        // request browser permission to use camera
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            if (videoRef && videoRef.current) {
                (videoRef.current as HTMLVideoElement).srcObject = stream;
                (videoRef.current as HTMLVideoElement).play();
            }
        })
        .catch(function(error) {
            console.error("Error accessing the camera:", error);
        });
    }, []);

    return <>
        <nav className="w-full bg-slate-800 h-[5em] flex justify-center">
            <div className="text-4xl">CounterPunch</div>
        </nav>
        <div>
            <video ref={videoRef}></video>
        </div>
    </>
}