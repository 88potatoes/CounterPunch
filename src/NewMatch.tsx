import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";

export default function NewMatch() {
    const navigate = useNavigate();
    
    const goToNewMatchLive = () => {
        navigate('/newMatchLive')
    }

    return <>
        <nav className="w-full bg-slate-800 h-[5em] flex justify-center">
            <div className="text-4xl">CounterPunch</div>
        </nav>
        <div>
            <Button onClick={goToNewMatchLive}>Submit form and Go next</Button>
        </div>
    </>
}