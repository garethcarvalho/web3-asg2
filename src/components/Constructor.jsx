
export const Constructor = ({ constructor, addFavouriteConstructor }) => {
    return (
        <div>
            <h2>{constructor.name}</h2>
            <p>Nationality: {constructor.nationality}</p>
            <a href={constructor.url}>More Information</a>
            <div>
                <button className="underline text-black hover:text-gray-500" onClick={() => {
                    addFavouriteConstructor(constructor);
                }}>Add to Favourites</button>
            </div>
        </div>
    );
};
