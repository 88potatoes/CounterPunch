import { CardDescription, CardTitle } from "./ui/card";

interface ScoreCardProps {
  thrown: number;
  hits: number;
}

export default function ScoreCard({ thrown, hits }: ScoreCardProps) {
  return (
    <div className="pt-2">
      <CardTitle>Score</CardTitle>
      <CardDescription>Punches Thrown: {thrown}</CardDescription>
      <CardDescription>Punches Hit: {hits}</CardDescription>
      <CardDescription>
        Punches Hit %: {((hits / thrown) * 100).toFixed(1)}
      </CardDescription>
    </div>
  );
}
