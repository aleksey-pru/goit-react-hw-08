import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="flex flex-col w-md items-center text-left">
      <p>Find contacts by name</p>
      <input
        className="input w-full mb-5"
        type="text"
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
