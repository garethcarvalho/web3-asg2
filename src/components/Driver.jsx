import Button from "./Button"

export const Driver = ({ driver, addFavouriteDriver }) => {
    return (
        <div>
            <h2>{`${driver.forename} ${driver.surname}`}</h2>
            <p>DOB: {driver.dob}</p>
            <p>Nationality: {driver.nationality}</p>
            <a href={driver.url}>More Information</a>
            <div>
                <button className="underline text-black hover:text-gray-500" onClick={() => {
                    addFavouriteDriver(driver);
                }}>Add to Favourites</button>
            </div>
        </div>
    )
}
