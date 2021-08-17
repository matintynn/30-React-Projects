import { useContext } from "react";
import { moviesContext } from "../contexts/context";

const Header = () => {
    const { searchValue, setSearchValue } = useContext(moviesContext)
    const handleChange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    return (
        <div className="header px-4 mt-4 row justify-content-between">
            <div className="col col-sm-4 d-flex justify-content-start align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                </svg>
                <h2 className="m-0 ms-2">finmo</h2>
            </div>
            <input
                className="search col col-sm-6 px-2 border rounded-pill"
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Header;