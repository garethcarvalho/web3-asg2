export const ConstructorStandingsBoard = ({ constructorStandings }) => {
    return (
        <section id="constructorStandingsBoard" className="w-1/2 m-2 p-2 bg-gray-300 h-full">
            <h2 className="text-center font-bold pt-4">Constructors</h2>
            <div className="overflow-y-scroll h-full">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-center text-sm">Pos</th>
                            <th className="text-left text-sm"></th>
                            <th className="text-center text-sm">Pts</th>
                            <th className="text-center text-sm">Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {constructorStandings.map((s) => {
                            return (
                                <tr key={s.position} className="hover:bg-gray-400 transition-all duration-200">
                                    <td className="text-center text-sm font-bold">{s.position}</td>
                                    <td className="text-sm">{s.constructors.name}</td>
                                    <td className="text-center text-sm">{s.points}</td>
                                    <td className="text-center text-sm">{s.wins}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
