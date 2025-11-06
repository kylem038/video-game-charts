'use client';

import { useState } from "react"

interface SearchProps {
    onSubmit: (query: string) => void;
    placeholder?: string;
};

const SearchInput: React.FC<SearchProps> = ({onSubmit, placeholder = "Search by game id"}) => {
    const [searchText, setSearchText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(searchText);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label>Game Search:</label>
            <input 
                type="text"
                placeholder={placeholder}
                className="border rounded-md px-4"
                onChange={(e) => {setSearchText(e.target.value)}}
                value={searchText}
            />
            <button
                className="border rounded-md"
                type="submit"
            >Submit</button>
        </form>
    )
}

export default SearchInput;