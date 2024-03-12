const CircuitSeasonPanel = ({circuitSeason}) => {
    return (
        <section id="racesPanel">
            <h2>{circuitSeason.year} Races</h2>
            <table>
                <tr>
                    <th>Rnd</th>
                    <th>Circuit</th>
                </tr>
                {circuitSeason.circuits.map((c, index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>{c}</td>
                            <td>
                                <button>Results</button>
                                <button>Standings</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </section>
    );
}

export default CircuitSeasonPanel;