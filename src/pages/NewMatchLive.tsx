import FighterCard from "@/components/FighterCard";
import ScoreCard from "@/components/ScoreCard";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import apiClient from "@/main";
import { Fighter } from "@/types/types";
import axios from "axios";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
/**
 * The page for the Main view with the camera and the live scoring
 * @returns
 */
//

const fighterPreset1 = {
  id: 1,
  name: "Fighter Uno",
  country: "Australia",
  avatarURL:
    "https://wallpapers.com/images/hd/pfp-pictures-t0vlqv5glu7xo4mb.jpg",
};
const fighterPreset2 = {
  id: 2,
  name: "Fighter Duo",
  country: "New Zealand",
  avatarURL:
    "https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-3.jpg",
};

export default function NewMatchLive() {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const [fighter1thrown, setFighter1thrown] = useState(0);
  const [fighter1hits, setFighter1hits] = useState(0);
  const [fighter2thrown, setFighter2thrown] = useState(0);
  const [fighter2hits, setFighter2hits] = useState(0);
  const [fighter1, setFighter1] = useState<Fighter | null>(null);
  const [fighter2, setFighter2] = useState<Fighter | null>(null);
  const [streamOn, setStreamOn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const incrementF1thrown = () => {
    setFighter1thrown(fighter1thrown + 1);
  };
  const incrementF2thrown = () => {
    setFighter2thrown(fighter2thrown + 1);
  };
  const decrementF1thrown = () => {
    setFighter1thrown(Math.max(0, fighter1thrown - 1));
  };
  const decrementF2thrown = () => {
    setFighter2thrown(Math.max(0, fighter2thrown - 1));
  };

  const incrementF1hits = () => {
    setFighter1hits(fighter1hits + 1);
  };
  const incrementF2hits = () => {
    setFighter2hits(fighter2hits + 1);
  };
  const decrementF1hits = () => {
    setFighter1hits(Math.max(0, fighter1hits - 1));
  };
  const decrementF2hits = () => {
    setFighter2hits(Math.max(0, fighter2hits - 1));
  };

  const toggleStreamOn = () => {
    setStreamOn(!streamOn);
  };

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {

    
    // Check for browser support
    if (!navigator.mediaDevices) {
      console.log("Your browser doesn't support camera access");
      return;
    }

    // Request browser permission to use the camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch(function (error) {
        console.error("Error accessing the camera:", error);
      });

    // Function to send frame to the backend
    function sendFrame() {
      if (videoRef.current) {
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext("2d");

        if (context) {
          context.drawImage(
            videoRef.current,
            0,
            0,
            canvas.width,
            canvas.height
          );
          const frame = canvas.toDataURL("image/jpeg");

          console.log("Sending frame:", frame);
          
          apiClient.post('/process_frame', {
            image: frame
          })
            // .then((data) => {
            //   console.log("Frame processed:", data);
            // })
            // .catch((error) => {
            //   console.error("Error:", error);
            // });
        }
      }
    }

    // Send frames at 30 FPS
    const intervalId = setInterval(sendFrame, 1000 / 30);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (fighter1 === null || fighter2 == null) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <div>
        <Button onClick={goToHome}></Button>
      </div>
      <div className="bg-black flex justify-center">
        <video ref={videoRef} className="bg-slate-700"></video>
      </div>
      <div className="flex flex-row justify-around">
        <Card className="p-2">
          <FighterCard fighter={fighter1} />
          <ScoreCard thrown={fighter1thrown} hits={fighter1hits} />
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
          <FighterCard fighter={fighter2} />
          <ScoreCard thrown={fighter2thrown} hits={fighter2hits} />
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
      <div className="flex justify-center">
        <Card className="flex justify-around flex-col mt-4 w-[80%]">
          {streamOn && (
            <Button className="bg-red-700" onClick={toggleStreamOn}>
              Stop CounterPunch.
            </Button>
          )}
          {!streamOn && (
            <Button
              className="bg-green-700 text-white"
              onClick={toggleStreamOn}
            >
              Start CounterPunch.
            </Button>
          )}
        </Card>
      </div>
    </>
  );
}
