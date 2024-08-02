import FighterCard from "@/components/FighterCard";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { MutableRefObject, useEffect, useRef } from "react";
/**
 * The page for the Main view with the camera and the live scoring
 * @returns 
 */
//
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
        <div className="bg-black flex justify-center">
            <video ref={videoRef} className="bg-slate-700"></video>
        </div>
        <div className="flex flex-row justify-around">
            <Card className="p-2">
                <FighterCard/>
                <div className="pt-2">
                    
                    <CardTitle>Score</CardTitle>
                    <CardDescription>Punches Thrown: 10</CardDescription>
                    <CardDescription>Punches Hit: 10</CardDescription>
                    <CardDescription>Punches Hit %: 10</CardDescription>
                </div>
                <div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Thrown</CardTitle>
                        <div>
                            <Button>+</Button>
                            <Button>-</Button>

                        </div>
                    </div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Hit</CardTitle>
                        <div>
                            <Button>+</Button>
                            <Button>-</Button>

                        </div>
                    </div>
                </div>
            </Card>

            {/* DUPLICATE */}
            <Card className="p-2">
                <FighterCard/>
                <div className="pt-2">
                    
                    <CardTitle>Score</CardTitle>
                    <CardDescription>Punches Thrown: 10</CardDescription>
                    <CardDescription>Punches Hit: 10</CardDescription>
                    <CardDescription>Punches Hit %: 10</CardDescription>
                </div>
                <div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Thrown</CardTitle>
                        <div>
                            <Button>+</Button>
                            <Button>-</Button>

                        </div>
                    </div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Hit</CardTitle>
                        <div>
                            <Button>+</Button>
                            <Button>-</Button>

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </>
}