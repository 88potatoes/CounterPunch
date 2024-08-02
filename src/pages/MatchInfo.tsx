import FighterCard from "@/components/FighterCard";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Match } from "@/types/types";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export interface MatchInfoProps {
  match: Match;
}

export default function MatchInfo() {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const [match, setMatch] = useState<Match | null>(null);
  const location = useLocation();
  const { id: match_id } = useParams();

  useEffect(() => {
    if (location.state && location.state.match) {
        setMatch(location.state.match);
    } else {
        //
    }
  }, []);

  if (match === null) {
    return <div>
        <h1>Error occured.</h1>
    </div>
  }

  return (
    <>
      <div className="bg-black flex justify-center">
        <video ref={videoRef} className="bg-slate-700"></video>
      </div>
      <div className="flex flex-row justify-around">
        <Card className="p-2">
          <FighterCard fighter={match.fighter1} />
          <div className="pt-2">
            <CardTitle>Score</CardTitle>
            <CardDescription>
              Punches Thrown: {match.scores.fighter1.thrown}
            </CardDescription>
            <CardDescription>
              Punches Hit: {match.scores.fighter1.hits}
            </CardDescription>
            <CardDescription>
              Punches Hit %:{" "}
              {((match.scores.fighter1.hits / match.scores.fighter1.thrown) * 100).toFixed(1)}%
            </CardDescription>
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
          <FighterCard fighter={match.fighter2} />
          <div className="pt-2">
            <CardTitle>Score</CardTitle>
            <CardDescription>
              Punches Thrown: {match.scores.fighter2.thrown}{" "}
            </CardDescription>
            <CardDescription>
              Punches Hit: {match.scores.fighter2.hits}
            </CardDescription>
            <CardDescription>
              Punches Hit %:{" "}
              {((match.scores.fighter2.hits / match.scores.fighter2.thrown) * 100).toFixed(1)}%
            </CardDescription>
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
  );
}
