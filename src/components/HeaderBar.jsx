import { About } from "./About";
import { Favourites } from "./Favourites";

const HeaderBar = ({seasons, currentSeason, setSeason, onLogout, openModal, favourites}) => {
    function onSeasonChanged(e) {
        setSeason(e.target.value);
    }

    console.log(favourites);
    return (
        <div className="flex justify-between mb-2 py-4 bg-gray-200 h-1/6">
            <div className="ml-8 my-auto">
                <label className="mr-2">Season</label>
                <select name="season" value={currentSeason} onChange={onSeasonChanged}>
                    {seasons.map(s => <option value={s} key={s}>{s}</option>)}
                </select>
            </div>
            <h2 className="font-bold text-lg my-auto">F1 Dashboard</h2>
            <div className="mr-8 my-auto">
                <button onClick={() => {
                    openModal(
                        <Favourites favouriteDrivers={favourites.drivers} favouriteCircuits={favourites.circuits} favouriteConstructors={favourites.constructors} emptyFavourites={favourites.emptyFavourites}/>
                    )
                }} className="mx-2">Favourites</button>
                <button className="mr-2" onClick={() => {
                    openModal(
                        <About />
                    )
                }}>About</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}

export default HeaderBar;