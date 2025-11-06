"use client";

import SearchInput from "./search";
import { searchByGameId } from "../actions/searchActions";
import { useState } from "react";

const Dashboard = () => {
    const [gameData, setGameData] = useState<{}>({});

    const handleSearchById = (query: string) => {
        const gameDataResp = searchByGameId(query);
        if(Object.keys(gameData).length !== 0) {
            setGameData(gameDataResp);
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <SearchInput onSubmit={handleSearchById} />
        </>
    )
    
}

export default Dashboard;