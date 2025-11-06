"use client";

import SearchInput from "./search";
import { searchByGameId } from "../actions/searchActions";
import { useState, useTransition } from "react";
import GameDetails from "./gamedetails";

const Dashboard = () => {
    const [gameData, setGameData] = useState<{} | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSearchById = (query: string) => {
        setError(null);
        setGameData(null);

        startTransition(async () => {
            try {
                const gameDataResp = await searchByGameId(query);
                if(gameDataResp && Object.keys(gameDataResp).length > 0 && gameDataResp.success) {
                    setGameData(gameDataResp.data);
                } else {
                    setError("No results");
                }
            } catch(err) {
                console.error(err);
                setError("Something went wrong");
            }
        })

       
        
    }

    return (
        <>
            <h1>Dashboard</h1>
            <SearchInput onSubmit={handleSearchById} isPending={isPending}/>
            {error && <p className="text-red-500">{error}</p>}
            {gameData ? <GameDetails 
                name={gameData.name} 
                logo={gameData.capsule_image}
                releaseDate={gameData.release_date.date}
            /> : null}
        </>
    )
    
}

export default Dashboard;