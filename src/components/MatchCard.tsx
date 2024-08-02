import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FighterCard from "./FighterCard";
import { Button } from "./ui/button";
import { Match } from "@/types/types";
import { useNavigate } from "react-router-dom";

export interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const navigate = useNavigate();

  const handleSeeMatchInfo = () => {
    console.log(match);
    navigate(`/match/${match.id}`, { state: { match } });
  };

  return (
    <Card className="m-3">
      <CardHeader>
        <CardTitle>{match.title}</CardTitle>
        <CardDescription>{match.datetime}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row justify-between">
        <FighterCard fighter={match.fighter1} />
        <FighterCard fighter={match.fighter2} />
      </CardContent>
      <CardFooter>
        <Button onClick={handleSeeMatchInfo}> See Match </Button>
      </CardFooter>
    </Card>
  );
}
