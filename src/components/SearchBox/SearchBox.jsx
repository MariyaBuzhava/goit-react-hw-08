import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import c from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

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
