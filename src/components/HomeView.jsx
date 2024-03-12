import { useState, useEffect } from "react";
import HeaderBar from "./HeaderBar";
import CircuitSeasonPanel from "./CircuitSeasonPanel";

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
    const [season, setSeason] = useState(seasons[0]);

    async function changeSeason(year) {
        // Do our database call based on the season selection.
        // const {data, error} = await supabase.from()

        setSeason(year);
    }

    // Grab the seasons from supabase.
    // useEffect(() => {
    //
    // }, []);

    const circuitSeason = circuitSeasons.find(c => c.year == season);

    return (
        <div>
            <HeaderBar seasons={seasons} currentSeason={season} setSeason={setSeason} onLogout={onLogout} />
            <CircuitSeasonPanel circuitSeason={circuitSeason} />
        </div>
    );
};

export default HomeView;