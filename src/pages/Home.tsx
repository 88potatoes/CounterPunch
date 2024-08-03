import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import MatchCard from "@/components/MatchCard";
import { Match } from "@/types/types";
import apiClient from "@/main";
import { useQuery } from '@tanstack/react-query';
import { Card } from "@/components/ui/card";


const matchesPreset: Array<Match> = [
    {
        id: 1,
        title: "Big Match",
        datetime: "18 AUG 6:00PM",
        fighter1: {
            id: 1,
            name: "Fighter Uno",
            country: "Australia",
            avatarURL: "https://wallpapers.com/images/hd/pfp-pictures-t0vlqv5glu7xo4mb.jpg"
        },
        fighter2: {
            id: 2,
            name: "Fighter Duo",
            country: "New Zealand",
            avatarURL: "https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-3.jpg"
        },
        scores: {
            fighter1: {
                thrown: 10,
                hits: 3
            },
            fighter2: {
                thrown: 13,
                hits: 2
            },
        }
    }, 
    {
        id: 2,
        title: "Bigger Match",
        datetime: "19 AUG 7:00PM",
        fighter1: {
            id: 3,
            name: "Uno Macho",
            country: "Australia",
            avatarURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c27dc0a4-6276-4036-968e-51b70613de6d/dfbouue-a609b605-d553-4450-b56e-9cd707317231.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyN2RjMGE0LTYyNzYtNDAzNi05NjhlLTUxYjcwNjEzZGU2ZFwvZGZib3V1ZS1hNjA5YjYwNS1kNTUzLTQ0NTAtYjU2ZS05Y2Q3MDczMTcyMzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.49hw3fXDtkGsM1XMh3yk-kwhdUCeRfXTwtdeQnrfuZ0"
        },
        fighter2: {
            id: 4,
            name: "Duo Macho",
            country: "New Zealand",
            avatarURL: "https://unchainedcrypto.com/wp-content/uploads/2023/07/pfp-nft.png"
        },
        scores: {
            fighter1: {
                thrown: 10,
                hits: 3
            },
            fighter2: {
                thrown: 13,
                hits: 2
            },
        }
    }, 
]

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
