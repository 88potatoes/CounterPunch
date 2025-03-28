import { Fighter } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardTitle } from "./ui/card";

interface FighterCardProps {
  fighter: Fighter;
}

export default function FighterCard({ fighter }: FighterCardProps) {
  return (
    <Card className="p-3 flex-row flex">
      <div className="mr-3">
        <CardTitle>{fighter.name}</CardTitle>
        <CardDescription>{fighter.country}</CardDescription>
      </div>
      <Avatar>
        <AvatarImage src={fighter.avatarURL} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Card>
  );
}
