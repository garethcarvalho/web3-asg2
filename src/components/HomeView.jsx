import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import HeaderBar from "./HeaderBar";
import SeasonRacesPanel from "./SeasonRacesPanel";
import ResultsPanel from "./ResultsPanel";
import Button from "./Button";
import { StandingsPanel } from "./StandingsPanel";
import Modal from "./Modal";

const View = {
    Results: 1,
    Standings: 2
}

const sb = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

const HomeView = ({onLogout}) => {
    const [seasons, setSeasons] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(2024);
    const [seasonRaces, setSeasonRaces] = useState(null);
    const [currentRaceInfo, setCurrentRaceInfo] = useState(null);
    const [currentRaceStandings, setCurrentRaceStandings] = useState(null);

    const [viewState, setViewState] = useState(View.Results);

    const [ modalState, setModalState ] = useState({ shouldDisplay: false, content: null })

    const [ favouriteDrivers, setFavouriteDrivers ] = useState([])
    const [ favouriteConstructors, setFavouriteConstructors ] = useState([])
    const [ favouriteCircuits, setFavouriteCircuits ] = useState([])

    function emptyFavourites() {
        console.log("emptied favourites")
        setFavouriteDrivers([]);
        setFavouriteConstructors([]);
        setFavouriteCircuits([]);
        closeModal();
    }

    const favourites = {
        drivers: favouriteDrivers,
        constructors: favouriteConstructors,
        circuits: favouriteCircuits,
        emptyFavourites: emptyFavourites
    }

    function closeModal() {
        setModalState({ shouldDisplay: false, content: null });
    }

    function openModal(content) {
        setModalState({ shouldDisplay: true, content: content});
    }
    
    function addFavouriteDriver(driver) {
        if (favouriteDrivers.find(d => d.driverId == driver.driverId)) return;

        const f = [...favouriteDrivers];
        f.push(driver);

        setFavouriteDrivers(f);
    }

    function addFavouriteConstructor(constructor) {
        if (favouriteConstructors.find(c => c.constructorId == constructor.constructorId)) return;

        const c = [...favouriteConstructors];
        c.push(constructor);

        setFavouriteConstructors(c);
    }

    function addFavouriteCircuit(circuit) {
        if (favouriteCircuits.find(c => c.circuitId == circuit.circuitId)) return;
        const c = [...favouriteCircuits];
        c.push(circuit);

        setFavouriteCircuits(c);
    }

    console.log(favourites);
    openModal.addFavouriteDriver = addFavouriteDriver;
    openModal.addFavouriteConstructor = addFavouriteConstructor;
    openModal.addFavouriteCircuit = addFavouriteCircuit;

    async function changeSeason(year) {
        // Do our database call based on the season selection.
        // const {data, error} = await supabase.from()
        const {data, error} = await sb
            .from('races')
            .select('*, circuits!inner(*)')
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

    async function showRaceInfo(raceId) {
        if (currentRaceInfo && currentRaceInfo.raceId == raceId) {
            setViewState(View.Results);
            return;
        }

        const race = seasonRaces.find(r => r.raceId == raceId);
        if (!race) return;

        const qualifyingData = await sb
            .from('qualifying')
            .select('*, drivers!inner(*), constructors!inner(*)')
            .eq('raceId', raceId)
            .order('position', { ascending: true });
        
        if (qualifyingData.error) {
            console.error(error);
            return;
        }

        const resultsData = await sb
            .from('results')
            .select('*, drivers!inner(*), constructors!inner(*)')
            .eq('raceId', raceId)
            .order('positionOrder', { ascending: true });

        if (resultsData.error) {
            console.error(error);
            return;
        }
        
        const raceInfo = {
            raceId: raceId,
            race: race,
            qualifying: qualifyingData.data,
            results: resultsData.data
        }
            
        setCurrentRaceInfo(raceInfo);
        setViewState(View.Results);
    }

    async function showStandings(raceId) {
        if (currentRaceStandings && currentRaceStandings.raceId == raceId) {
            setViewState(View.Standings);
            return;
        }

        const race = seasonRaces.find(r => r.raceId == raceId);
        if (!race) return;

        const driverStandingsData = await sb
            .from('driver_standings')
    .select('*, drivers!inner(*)')
            .eq('raceId', raceId)
            .order('position', { ascending: true });
        
        if (driverStandingsData.error) {
            console.error(driverStandingsData.error);
            return;
        }

        const constructorStandingsData = await sb
            .from('constructor_standings')
            .select('*, constructors!inner(*)')
            .eq('raceId', raceId)
            .order('position', { ascending: true });

        if (constructorStandingsData.error) {
            console.error(driverStandingsData.error);
            return;
        }

        const data = {
            raceId: raceId,
            race: race,
            driverStandings: driverStandingsData.data,
            constructorStandings: constructorStandingsData.data
        }

        setCurrentRaceStandings(data);
        setViewState(View.Standings);
    }

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

    // I have no idea why, but this didn't work.
    // let view = <></>

    // switch (viewState) {
    //     case View.Results:
    //         view = <ResultsPanel currentRace={currentRaceInfo} />
    //     case View.Standings:
    //         view = <StandingsPanel raceStandingInfo={currentRaceStandings} />
    // }

    if (viewState == View.Results)
        return (
            <div className="bg-blue-200 bg-hero-pattern bg-cover h-screen mt-0 p-2">
                <HeaderBar seasons={seasons} currentSeason={currentSeason} setSeason={changeSeason} onLogout={onLogout} openModal={openModal} favourites={favourites}/>
                <div className="h-5/6 w-full flex pb-2">
                    <SeasonRacesPanel className="w-1/3" seasonRaces={seasonRaces} year={currentSeason} showRaceInfo={showRaceInfo} showStandings={showStandings}/>
                    <ResultsPanel currentRace={currentRaceInfo} openModal={openModal} />
                </div>
                <Modal shouldDisplay={modalState.shouldDisplay} onCloseButton={closeModal}>{modalState.content}</Modal>
            </div>
        );
    else if (viewState == View.Standings)
        return (
            <div className="bg-blue-200 h-screen mt-0 p-2">
                <HeaderBar seasons={seasons} currentSeason={currentSeason} setSeason={changeSeason} onLogout={onLogout} openModal={openModal} favourites={favourites}/>
                <div className="h-5/6 w-full flex pb-2">
                    <SeasonRacesPanel className="w-1/3" seasonRaces={seasonRaces} year={currentSeason} showRaceInfo={showRaceInfo} showStandings={showStandings}/>
                    <StandingsPanel raceStandingInfo={currentRaceStandings} openModal={openModal} />
                </div>
                <Modal shouldDisplay={modalState.shouldDisplay} onCloseButton={closeModal}>{modalState.content}</Modal>
            </div>
        );
};

export default HomeView;