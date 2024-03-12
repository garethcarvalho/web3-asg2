const HeaderBar = ({seasons, currentSeason, setSeason, onLogout}) => {
    function onSeasonChanged(e) {
        setSeason(e.target.value);
    }

    return (
        <div>
            <div>
                <label>Season</label>
                <select name="season" value={currentSeason} onChange={onSeasonChanged}>
                    {seasons.map(s => <option value={s} key={s}>{s}</option>)}
                </select>
            </div>
            <h2>F1 Dashboard</h2>
            <div>
                <button>Favourites</button>
                <button>About</button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}

export default HeaderBar;