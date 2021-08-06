import { RiSearch2Line } from "react-icons/ri";

const Search = ({ searchTextHandle }) => {
    return (
        <div className="search-note">
            <RiSearch2Line className="search-icon" size="1.5em" />
            <input
                type="text"
                placeholder="Search notes ..."
                onChange={(e) => searchTextHandle(e.target.value)}
            >
            </input>
        </div>
    );
}

export default Search;