import { useState } from "react";
import HeaderBar from "./HeaderBar";

// used for testing
const seasons = [
    2023, 2022, 2021, 2020, 2019, 2018
];

const HomeView = ({onLogout}) => {
    const [season, setSeason] = useState();

    return (
        <HeaderBar seasons={seasons} currentSeason={season} setSeason={setSeason} onLogout={onLogout}/>
    )
}

export default HomeView;