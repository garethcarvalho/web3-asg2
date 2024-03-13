import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import HeaderBar from "./HeaderBar";
import SeasonRacesPanel from "./SeasonRacesPanel";

const sb = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

// Used for testing.
const seasons = [
    2023, 2022, 2021, 2020, 2019, 2018
];

const circuitSeasons = [
    {
        year: 2023,
        circuits: [
            "British Grand Prix",
            "Italian Grand Prix"
        ]
    },
    {
        year: 2022,
        circuits: [
            "Argentinian Grand Prix",
            "Canadian Grand Prix"
        ]
    },{
        year: 2021,
        circuits: [
            "United Statesian Grand Prix",
            "Granolian Grand Prix"
        ]
    }
]

const HomeView = ({onLogout}) => {
    const [seasons, setSeasons] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(2024);
    const [seasonRaces, setSeasonRaces] = useState(null);

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

    const circuitSeason = circuitSeasons.find(c => c.year == currentSeason);

    return (
        <div>
            <HeaderBar seasons={seasons} currentSeason={currentSeason} setSeason={changeSeason} onLogout={onLogout} />
            <SeasonRacesPanel seasonRaces={seasonRaces} year={currentSeason} />
        </div>
    );
};

export default HomeView;