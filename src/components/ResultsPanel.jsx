import { QualifyingBoard } from "./QualifyingBoard";
import { ResultsBoard } from "./ResultsBoard";

const ResultsPanel = ({currentRace}) => {
    if (!currentRace) return <></>
    return (
        <section className="w-2/3 bg-gray-200 ml-2">
            <QualifyingBoard />
            <ResultsBoard />
        </section>
    )
}

export default ResultsPanel;