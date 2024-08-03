import FighterCard from "@/components/FighterCard";
import ScoreCard from "@/components/ScoreCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Match } from "@/types/types";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface MatchInfoProps {
  match: Match;
}

export default function MatchInfo() {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const [match, setMatch] = useState<Match | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
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

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Card className="mx-3 p-3">
        <Button onClick={goToHome}>Home</Button>
      </Card>
      <div className="m-3">
        <div className="p-2">
          <h1 className="text-4xl text-">
            <b>{match.title}</b>
          </h1>
        </div>
      </div>
      <div className="bg-black flex justify-center">
        <video ref={videoRef} className="bg-slate-700"></video>
      </div>
      <div className="flex flex-row justify-around mx-3">
        <Card className="p-3 m-3">
          <FighterCard fighter={match.fighter1} />
          <ScoreCard
            thrown={match.scores.fighter1.thrown}
            hits={match.scores.fighter1.hits}
          />
        </Card>

        {/* DUPLICATE */}
        <Card className="p-3 m-3">
          <FighterCard fighter={match.fighter2} />
          <ScoreCard
            thrown={match.scores.fighter2.thrown}
            hits={match.scores.fighter2.hits}
          />
        </Card>
      </div>
    </>
  );
}
