
export const Circuit = ({ circuit, addFavouriteCircuit }) => {
    return (
        <div>
            <h2>{circuit.name}</h2>
            <p>Location: {circuit.location}</p>
            <p>Country: {circuit.country}</p>
            <a href={circuit.url}>More Information</a>
            <div>
                <button className="underline text-black hover:text-gray-500" onClick={() => {
                    addFavouriteCircuit(circuit);
                }}>Add to Favourites</button>
            </div>
        </div>
    );
};
