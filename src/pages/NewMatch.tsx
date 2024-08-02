import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

/**
 * Creates a new math and then directs to NewMatchLive
 * @returns 
 */
export default function NewMatch() {
    const navigate = useNavigate();
    
    const goToNewMatchLive = () => {
        navigate('/newMatchLive')
    }

    return <>
        <div>
            <Button onClick={goToNewMatchLive}>Submit form and Go next</Button>
        </div>
    </>
}