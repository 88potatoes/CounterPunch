import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardTitle } from "./ui/card";

export default function FighterCard() {
    return <Card className="p-3 flex-row flex">
        <div className="mr-3">
            <CardTitle><p>Fighter1</p></CardTitle>
            <CardDescription>Brazil</CardDescription>
        </div>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </Card>
}
