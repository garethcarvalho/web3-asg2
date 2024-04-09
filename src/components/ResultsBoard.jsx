import { Driver } from "./Driver";
import { Constructor } from "./Constructor";

export const ResultsBoard = ({ results, openModal }) => {
    if (!results.length) {
        return (
            <section id="resultsBoard" className="w-1/2 m-2 p-2 bg-gray-300 h-full">
                <h2 className="text-center font-bold pt-4">Results</h2>
                <div className="h-full text-center">
                    <span className="h-full">No Results Data for this race.</span>
                </div>
            </section>
        )
    }
    else {
        return (
            <section id="resultsBoard" className="w-1/2 m-2 p-2 bg-gray-300 h-full">
                <h2 className="text-center font-bold pt-4">Results</h2>
                <div className="overflow-y-scroll h-full">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-center text-sm">Pos</th>
                                <th className="text-left text-sm"></th>
                                <th className="text-left text-sm"></th>
                                <th className="text-center text-sm">Laps</th>
                                <th className="text-center text-sm">Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((r) => {
                                return (
                                    <tr key={r.positionOrder} className="hover:bg-gray-400 transition-all duration-200">
                                        <td className="text-center text-sm font-bold">{r.position}</td>
                                        <td className="text-sm">
                                            <button onClick={() => {
                                                openModal(
                                                    <Driver driver={r.drivers} addFavouriteDriver={openModal.addFavouriteDriver}/>
                                                )
                                            }} className="underline text-black hover:text-gray-100">
                                                {`${r.drivers.forename} ${r.drivers.surname}`}
                                            </button>
                                        </td>
                                        <td className="text-sm">
                                            <button onClick={() => {
                                                openModal(
                                                    <Constructor constructor={r.constructors} addFavouriteConstructor={openModal.addFavouriteConstructor}/>
                                                )
                                            }} className="underline text-black hover:text-gray-100">
                                                {r.constructors.name}
                                            </button>
                                        </td>
                                        <td className="text-center text-sm">{r.laps}</td>
                                        <td className="text-center text-sm">{r.points}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
    
};
