const HeaderBar = ({seasons, currentSeason, setSeason, onLogout}) => {
    function onSeasonChanged(e) {
        setSeason(e.target.value);
    }

    return (
        <div className="flex justify-between mb-2 py-4 bg-gray-200">
            <div className="ml-8">
                <label className="mr-2">Season</label>
                <select name="season" value={currentSeason} onChange={onSeasonChanged}>
                    {seasons.map(s => <option value={s} key={s}>{s}</option>)}
                </select>
            </div>
            <h2 className="font-bold text-lg">F1 Dashboard</h2>
            <div className="mr-8">
                <button className="mx-2">Favourites</button>
                <button className="mr-2">About</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}

export default HeaderBar;