import FighterCard from "@/components/FighterCard";
import ScoreCard from "@/components/ScoreCard";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Fighter } from "@/types/types";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface Prediction {
    class: string;
    class_id: number;
    confidence: number;
    detection_id: string;
    height: number;
    image_path: string;
    prediction_type: string;
    width: number;
    x: number;
    y: number;
}

const fighterPreset1: Fighter = {
    id: 1,
    name: "Fighter Uno",
    country: "Australia",
    avatarURL: "https://wallpapers.com/images/hd/pfp-pictures-t0vlqv5glu7xo4mb.jpg"
}
const fighterPreset2: Fighter = {
    id: 2,
    name: "Fighter Duo",
    country: "New Zealand",
    avatarURL: "https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-3.jpg"
}

export default function NewMatchLive() {
    const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
    const [fighter1thrown, setFighter1thrown] = useState(0);
    const [fighter1hits, setFighter1hits] = useState(0);
    const [fighter2thrown, setFighter2thrown] = useState(0);
    const [fighter2hits, setFighter2hits] = useState(0);
    const [fighter1, setFighter1] = useState<Fighter | null>(null);
    const [fighter2, setFighter2] = useState<Fighter | null>(null);

    const incrementF1thrown = () => {
        setFighter1thrown(fighter1thrown + 1);
    }
    const incrementF2thrown = () => {
        setFighter2thrown(fighter2thrown + 1);
    }
    const decrementF1thrown = () => {
        setFighter1thrown(Math.max(0, fighter1thrown - 1));
    }
    const decrementF2thrown = () => {
        setFighter2thrown(Math.max(0, fighter2thrown - 1));
    }

    const incrementF1hits = () => {
        setFighter1hits(fighter1hits + 1);
    }
    const incrementF2hits = () => {
        setFighter2hits(fighter2hits + 1);
    }
    const decrementF1hits = () => {
        setFighter1hits(Math.max(0, fighter1hits - 1));
    }
    const decrementF2hits = () => {
        setFighter2hits(Math.max(0, fighter2hits - 1));
    }

    useEffect(() => {
        if (!navigator.mediaDevices) {
            console.log("Your browser doesn't support camera access");
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
        })
        .catch(function(error) {
            console.error("Error accessing the camera:", error);
        });

        setFighter1(fighterPreset1);
        setFighter2(fighterPreset2);
    }, []);

    if (fighter1 === null || fighter2 == null) {
        return <h1>Error</h1>
    }

    return <>
        <div className="bg-black flex justify-center">
            <img src="https://counterpunchwebapp-cqbkhte8dfctddg0.australiasoutheast-01.azurewebsites.net/video_feed" alt="Live Video Feed" />
        </div>
        <div className="flex flex-row justify-around">
            <Card className="p-2">
                <FighterCard fighter={fighter1}/>
                <ScoreCard thrown={fighter1thrown} hits={fighter1hits}/>
                <div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Thrown</CardTitle>
                        <div>
                            <Button onClick={incrementF1thrown}>+</Button>
                            <Button onClick={decrementF1thrown}>-</Button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Hit</CardTitle>
                        <div>
                            <Button onClick={incrementF1hits}>+</Button>
                            <Button onClick={decrementF1hits}>-</Button>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="p-2">
                <FighterCard fighter={fighter2}/>
                <ScoreCard thrown={fighter2thrown} hits={fighter2hits}/>
                <div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Thrown</CardTitle>
                        <div>
                            <Button onClick={incrementF2thrown}>+</Button>
                            <Button onClick={decrementF2thrown}>-</Button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <CardTitle className="text-sm">Punches Hit</CardTitle>
                        <div>
                            <Button onClick={incrementF2hits}>+</Button>
                            <Button onClick={decrementF2hits}>-</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </>
}
