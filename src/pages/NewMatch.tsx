import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import apiClient from "@/main";

/**
 * Creates a new math and then directs to NewMatchLive
 * @returns
 */

// {
//     "title": "Big Match 2",
//     "datetime": "2023-08-18T18:00:00",
//     "fighter1": {
//         "id": 2
//     },
//     "fighter2": {
//         "id": 3
//     }
// }

export default function NewMatch() {
  const navigate = useNavigate();
  const [matchName, setMatchName] = useState("UFC 101");
  const [fighter1id, setFighter1id] = useState(1);
  const [fighter2id, setFighter2id] = useState(2);

  const submitNewMatchInfo = async () => {
    if (matchName === "") {
      return;
    }
    if (fighter1id === null || fighter1id === undefined) {
      return;
    }
    if (fighter2id === null || fighter2id === undefined) {
      return;
    }

    const response = await apiClient.post("/match",  {
        title: matchName,
        datetime: "2023-08-18T18:00:00",
        fighter1: {
            id: fighter1id
        },
        fighter2: {
            id: fighter2id
        },
    });
    const matches = response.data;

    if (!("id" in matches)) {
      alert("Failed to create new match.");
      return;
    }

    navigate("/newMatchLive", {
      state: {
        title: matchName,
        datetime: "2023-08-18T18:00:00",
        fighter1: { id: fighter1id },
        fighter2: { id: fighter2id },
      },
    });
  };
  
  const changeMatchName = (e : React.ChangeEvent<HTMLInputElement>) => {
    setMatchName(e.target.value);
  };
  const changeFighter1id = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFighter1id(Number(e.target.value));
  };
  const changeFighter2id = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFighter2id(Number(e.target.value));
  };

  return (
    <>
      <div>
        <Card className="mx-3 p-3">
          <CardTitle>Match Name</CardTitle>
          <Input
            type="text"
            placeholder="UFC 101"
            className="my-2"
            value={matchName}
            onChange={changeMatchName}
          />
          <CardTitle>Fighter 1 ID</CardTitle>
          <Input
            type="number"
            placeholder="1"
            className="my-2"
            value={fighter1id}
            onChange={changeFighter1id}
          />
          <CardTitle>Fighter 2 ID</CardTitle>
          <Input
            type="number"
            placeholder="2"
            className="my-2"
            value={fighter2id}
            onChange={changeFighter2id}
          />
          <div className="py-2">
            <Button onClick={submitNewMatchInfo}>Create Match</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
