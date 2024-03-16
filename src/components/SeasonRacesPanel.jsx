import Button from "./Button";

const SeasonRacesPanel = ({seasonRaces, year}) => {
    if (!seasonRaces)
        return <section id="racesPanel"></section>;

    return (
        <section id="racesPanel" className="left-0 w-1/3 pb-4 bg-gray-200 h-full">
            <h2 className="text-center font-bold pt-4">{year} Races</h2>
            <div className="overflow-y-auto h-max">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="text-center text-sm">Rnd</th>
                            <th className="text-left text-sm">Circuit</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-scroll w-full h-full">
                        {seasonRaces.map((r) => {
                            return (
                                <tr key={r.raceId}>
                                    <td className="text-center text-sm font-bold">{r.round}</td>
                                    <td className="text-sm">{r.name}</td>
                                    <td className="text-right pr-4">
                                        <Button styles={{normal: ["bg-blue-500 text-white mx-2 my-0.5"], hover: ["bg-blue-600", "shadow-lg"], focus: ["bg-blue-600", "shadow-lg"], transitionDuration: 300}}>Results</Button>
                                        <Button styles={{normal: ["bg-blue-500", "text-white"], hover: ["bg-blue-600", "shadow-lg"], focus: ["bg-blue-600", "shadow-lg"], transitionDuration: 300}}>Standings</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default SeasonRacesPanel;