import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import HeaderBar from "./HeaderBar";
import SeasonRacesPanel from "./SeasonRacesPanel";
import ResultsPanel from "./ResultsPanel";
import Button from "./Button";

const sb = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

const HomeView = ({onLogout}) => {
    const [seasons, setSeasons] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(2024);
    const [seasonRaces, setSeasonRaces] = useState(null);
    const [currentRace, setCurrentRace] = useState(null);

    async function changeSeason(year) {
        // Do our database call based on the season selection.
        // const {data, error} = await supabase.from()
        const {data, error} = await sb
            .from('races')
            .select()
            .eq('year', currentSeason)
            .order('round', { ascending: true });
        
        if (error) {
            console.error(error);
            return;
        }

        console.log(data);

        setCurrentSeason(year);
        setSeasonRaces(data);
    }

    function showRaceInfo(raceId) {
        if (currentRace && currentRace.raceId == raceId)
            return;
        const race = seasonRaces.find(r => r.raceId == raceId);
        setCurrentRace(race);
        console.log(raceId);
    }

    // Grab the seasons from supabase.
    useEffect(() => {
        sb.from('seasons')
        .select()
        .then((response) => {
            if (response.error)
                return;
            response.data.sort((a, b) => b.year - a.year);
            setSeasons(response.data.map(s => s.year));
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="bg-blue-200 h-screen mt-0 p-2">
            <HeaderBar seasons={seasons} currentSeason={currentSeason} setSeason={changeSeason} onLogout={onLogout} />
            <div className="h-5/6 w-full flex">
                <SeasonRacesPanel className="w-1/3" seasonRaces={seasonRaces} year={currentSeason} showRaceInfo={showRaceInfo} />
                <ResultsPanel currentRace={currentRace} />
            </div>
        </div>
    );
};

export default HomeView;