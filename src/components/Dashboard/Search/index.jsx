import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.css";

// eslint-disable-next-line react/prop-types
function Search({ handleSearch }) {
  return (
    <div className="search">
      <SearchRoundedIcon className="search-icon" />
      <input
        type="text"
        placeholder="search here"
        className="searchInput"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
