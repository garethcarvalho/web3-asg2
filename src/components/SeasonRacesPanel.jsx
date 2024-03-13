const SeasonRacesPanel = ({seasonRaces, year}) => {
    if (!seasonRaces)
        return <section id="racesPanel"></section>;

    return (
        <section id="racesPanel" className="left-0 w-1/3 bg-blue-300">
            <h2 className="text-center font-bold pt-4">{year} Races</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-center text-sm">Rnd</th>
                        <th className="text-left text-sm">Circuit</th>
                    </tr>
                </thead>
                <tbody>
                    {seasonRaces.map((r) => {
                        return (
                            <tr key={r.raceId}>
                                <td className="text-center">{r.round}</td>
                                <td>{r.name}</td>
                                <td className="text-center">
                                    <button>Results</button>
                                    <button>Standings</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}

export default SeasonRacesPanel;