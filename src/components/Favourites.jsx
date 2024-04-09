import Button from "./Button"

export const Favourites = ({ favouriteDrivers, favouriteConstructors, favouriteCircuits, emptyFavourites }) => {
    return (
        <section id="favourites" className="">
            <h1 className="text-center font-bold">Favourites <Button onClick={() => {
                emptyFavourites();
            }} styles={{normal: ["bg-blue-500 text-white mx-2 my-0.5"], hover: ["bg-blue-600", "shadow-lg"], focus: ["bg-blue-600", "shadow-lg"], transitionDuration: 100}}>Empty Favourites</Button></h1>
            
            <div className="flex w-full">
                <div className="w-1/3 h-full mx-2">
                    <h1 className="text-center font-bold">Drivers</h1>
                    <ul className="bg-gray-300 h-full">
                        {favouriteDrivers.map(d => {
                            return <li key={d.driverId}>{`${d.forename} ${d.surname}`}</li>
                        })}
                    </ul>
                </div>
                <div className="w-1/3 h-full">
                    <h1 className="text-center font-bold">Constructors</h1>
                    <ul className="bg-gray-300">
                        {favouriteConstructors.map(c => {
                            return <li key={c.constructorId}>{c.name}</li>
                        })}
                    </ul>
                </div>
                <div className="w-1/3 h-full mx-2">
                    <h1 className="text-center font-bold">Circuits</h1>
                    <ul className="bg-gray-300">
                        {favouriteCircuits.map(c => {
                            return <li key={c.circuitId}>{c.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
