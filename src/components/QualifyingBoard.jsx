import { Driver } from "./Driver";
import { Constructor } from "./Constructor"

export const QualifyingBoard = ({ qualifying, openModal }) => {

    if (!qualifying.length) {
        return (
            <section id="qualifyingPanel" className="w-1/2 m-2 p-2 bg-gray-300 h-full">
                <h2 className="text-center font-bold pt-4">Qualifying</h2>
                <div className="h-full text-center">
                    <span className="h-full">No Qualifying Data for this race.</span>
                </div>
            </section>
        )
    } else {
        return (
            <section id="qualifyingPanel" className="w-1/2 m-2 p-2 bg-gray-300 h-full">
                <h2 className="text-center font-bold pt-4">Qualifying</h2>
                <div className="overflow-y-scroll h-full">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-center text-sm">Pos</th>
                                <th className="text-left text-sm"></th>
                                <th className="text-left text-sm"></th>
                                <th className="text-center text-sm">Q1</th>
                                <th className="text-center text-sm">Q2</th>
                                <th className="text-center text-sm">Q3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {qualifying.map((q) => {
                                return (
                                    <tr key={q.position} className="hover:bg-gray-400 transition-all duration-200">
                                        <td className="text-center text-sm font-bold">{q.position}</td>
                                        <td className="text-sm">
                                            <button onClick={() => {
                                                openModal(
                                                    <Driver driver={q.drivers} addFavouriteDriver={openModal.addFavouriteDriver}/>
                                                )
                                            }} className="underline text-black hover:text-gray-100">
                                                {`${q.drivers.forename} ${q.drivers.surname}`}
                                            </button>
                                        </td>
                                        <td className="text-sm">
                                            <button onClick={() => {
                                                openModal(
                                                    <Constructor constructor={q.constructors} addFavouriteConstructor={openModal.addFavouriteConstructor}/>
                                                )
                                            }} className="underline text-black hover:text-gray-100">
                                                {q.constructors.name}
                                            </button>
                                        </td>
                                        <td className="text-center text-sm">{q.q1}</td>
                                        <td className="text-center text-sm">{q.q2}</td>
                                        <td className="text-center text-sm">{q.q3}</td>
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
