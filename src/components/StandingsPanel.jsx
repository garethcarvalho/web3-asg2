import { DriverStandingsBoard } from "./DriverStandingsBoard"
import { ConstructorStandingsBoard } from "./ConstructorStandingsBoard"

export const StandingsPanel = ({ raceStandingInfo }) => {
    if (!raceStandingInfo)
        return <></>
    return (
        <section id="standingsPanel" className="w-2/3 bg-gray-200 ml-2 h-full">
            <h2 className="font-bold text-center text-lg mt-4">Standings</h2>
            <div className="flex">
                <DriverStandingsBoard diverStandings={raceStandingInfo.driverStandings} />
                <ConstructorStandingsBoard constructorStandings={raceStandingInfo.constructorStandings} />
            </div>
        </section>
    )
}

