import c from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={c.searchBox}>
      <label className={c.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={c.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
