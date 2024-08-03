import { CardDescription, CardTitle } from "./ui/card";

interface ScoreCardProps {
  thrown: number;
  hits: number;
}

export default function ScoreCard({ thrown, hits }: ScoreCardProps) {
  return (
    <div className="pt-2">
      <CardTitle>Score</CardTitle>
      <CardDescription>
        Punches Thrown: <b>{thrown}</b>
      </CardDescription>
      <CardDescription>
        Punches Hit: <b>{hits}</b>
      </CardDescription>
      <CardDescription>
        Punches Hit %: <b>{((hits / thrown) * 100).toFixed(1)}</b>
      </CardDescription>
    </div>
  );
}
