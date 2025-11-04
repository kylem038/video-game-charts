import App from "./app";

export default async function Home() {
  const res = await fetch(`https://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${process.env.STEAM_API_KEY}&format=json`);

  const data = await res.json();

  console.log('DATA: ', data.applist.apps);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <App />
    </div>
  );
}
