import React from "react";
import { useFilters } from "../../store/filter-Provider";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const {
    updateFilter,
    filter: { text },
  } = useFilters();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          tabIndex={0}
          type="search"
          onChange={updateFilter}
          name="text"
          value={text}
          placeholder="Type to search..."
          className={classes.search}
        />
      </form>
    </div>
  );
};

export default SearchBar;
