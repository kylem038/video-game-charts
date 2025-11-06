'use client';

import Image from "next/image";

interface GameDetailsProps {
    name: string;
    logo: string;
    releaseDate: string;
}

const GameDetails: React.FC<GameDetailsProps> = ({name, logo, releaseDate}) => {
    return (
        <div className="flex flex-col">
            <h1>{name}</h1>
            <hr></hr>
            <Image  
                src={logo}
                alt={`${name}-logo`}
                width={231}
                height={87}
            />
            <div className="flex flex-row">
                <span>Release Date:</span>
                <p>{releaseDate}</p>
            </div> 
            
        </div>
    )
}

export default GameDetails;