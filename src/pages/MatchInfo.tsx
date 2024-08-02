import FighterCard from "@/components/FighterCard";
import ScoreCard from "@/components/ScoreCard";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
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
//   const { id: match_id } = useParams();

  useEffect(() => {
    if (location.state && location.state.match) {
      setMatch(location.state.match);
    } else {
      // TODO : to add the fetch
    }
  }, [location.state]);

  if (match === null) {
    return (
      <div>
        <h1>Error occured.</h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-black flex justify-center">
        <video ref={videoRef} className="bg-slate-700"></video>
      </div>
      <div className="flex flex-row justify-around">
        <Card className="p-2">
          <FighterCard fighter={match.fighter1} />
          <ScoreCard
            thrown={match.scores.fighter1.thrown}
            hits={match.scores.fighter1.hits}
          />
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
          <ScoreCard
            thrown={match.scores.fighter2.thrown}
            hits={match.scores.fighter2.hits}
          />
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
