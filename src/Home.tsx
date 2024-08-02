import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";  
import { Button } from "./components/ui/button";
import FighterCard from "./components/FighterCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const goToMatch = () => {
        navigate("/match");
    }

    const goToNewMatch = () => {
        navigate("/newMatch");
    }
    
    return <>
        <div>
            <Button onClick={goToNewMatch}>New Match</Button>
        </div>
        <div>
            <Card className="m-3">
                <CardHeader>
                    <CardTitle>Match 1</CardTitle>
                    <CardDescription>9:00pm AEST</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row justify-between">
                    <FighterCard/>
                    <FighterCard/>
                </CardContent>
                <CardFooter>
                    <Button onClick={goToMatch}>
                        See Match
                    </Button>
                </CardFooter>
            </Card>
            <Card className="m-3">
                <CardHeader>
                    <CardTitle>Match 1</CardTitle>
                    <CardDescription>9:00pm AEST</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row justify-between">
                    <FighterCard/>
                    <FighterCard/>
                </CardContent>
                <CardFooter>
                    <Button onClick={goToMatch}>
                        See Match
                    </Button>
                </CardFooter>
            </Card>
            <Card className="m-3">
                <CardHeader>
                    <CardTitle>Match 1</CardTitle>
                    <CardDescription>9:00pm AEST</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row justify-between">
                    <FighterCard/>
                    <FighterCard/>
                </CardContent>
                <CardFooter>
                    <Button onClick={goToMatch}>
                        See Match
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </>
}
