"use server"

const GET_ALL_APPS = `https://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${process.env.STEAM_API_KEY}`;

export async function searchByGameId(id: string) {
    const res = await fetch(`http://store.steampowered.com/api/appdetails?appids=${id}`);
    if(!res.ok) throw new Error("Search failed");
    const data = await res.json();
    return data[id];
}