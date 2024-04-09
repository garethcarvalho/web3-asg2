import { useState } from "react";
import { QualifyingBoard } from "./QualifyingBoard";
import { ResultsBoard } from "./ResultsBoard";
import { Circuit } from "./Circuit";

const ResultsPanel = ({ currentRace, openModal }) => {
    if (!currentRace) return <></>

    const race = currentRace.race

    return (
        <section id="resultsPanel" className="w-2/3 bg-gray-200 ml-2 h-full">
            <h2 className="font-bold text-center text-lg mt-4">Results</h2>
            <div>
                <p>
                    {`${race.name}, Round ${race.round}, ${race.year}, `}
                    <button onClick={() => {
                        openModal(
                            <Circuit circuit={race.circuits} addFavouriteCircuit={openModal.addFavouriteCircuit}/>
                        )
                    }} className="underline text-black hover:text-gray-500">
                        {race.circuits.name}
                    </button>
                    {`, ${race.date}, `}
                    <a href={race.url} className="underline text-black hover:text-gray-500">Information</a>
                </p>
            </div>
            <div className="flex">
                <QualifyingBoard qualifying={currentRace.qualifying} openModal={openModal} />
                <ResultsBoard results={currentRace.results} openModal={openModal} />
            </div>
        </section>
    )
}

export default ResultsPanel;