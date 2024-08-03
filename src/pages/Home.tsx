import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import MatchCard from "@/components/MatchCard";
import { Match } from "@/types/types";
import apiClient from "@/main";
import { useQuery } from '@tanstack/react-query';
import { Card } from "@/components/ui/card";

export default function Home() {
    const navigate = useNavigate();
    const getRecentMatches = async () => {
        console.log('hi')
        console.log(apiClient.defaults);
        const response = await apiClient.get('/matches/recent');
        return response.data;
    }
    
    const goToNewMatch = () => {
        navigate("/newMatch");
    }
    
    const { isLoading, error, data : matches } = useQuery<Match[], Error>({
        queryKey: ['recent-matches'], 
        queryFn: getRecentMatches
    })

    return <>
        <div>
            <Card className="mx-3 p-3">
                <Button onClick={goToNewMatch}>New Match</Button>
            </Card>
        </div>
        <div className="mx-3 mt-4">
            <h1 className="text-4xl"><b>Matches</b></h1>
        </div>
        <div>
            {isLoading &&
                <h1>Getting matches...</h1>
            }
            {error && 
                <h2>An error occurred</h2>
            }
            {Array.isArray(matches) && matches?.map((match : Match, index) => {
                return <MatchCard match={match} key={index}/>
            })}
        </div>
    </>
}
