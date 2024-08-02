import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";  
import FighterCard from "../components/FighterCard";

export default function Match() {
    return <>
        <div>
            <Card className="m-3">
                <CardHeader>
                    <CardTitle>Match 1</CardTitle>
                    <CardDescription>9:00pm AEST</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row justify-between">
                    <div>
                        <FighterCard/>
                        <CardTitle className="mt-4">Score</CardTitle>
                        <CardDescription>Punches Thrown: 10</CardDescription>
                        <CardDescription>Punches Hit: 10</CardDescription>
                        <CardDescription>Punches Hit %: 10</CardDescription>
                    </div>
                    <div>
                        <FighterCard/>
                        <CardTitle className="mt-4">Score</CardTitle>
                        <CardDescription>Punches Thrown: 10</CardDescription>
                        <CardDescription>Punches Hit: 10</CardDescription>
                        <CardDescription>Punches Hit %: 10</CardDescription>
                    </div>
                </CardContent>
            </Card>
        </div>
    </>
}