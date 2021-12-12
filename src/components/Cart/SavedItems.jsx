import React from "react";
import { useSave } from "../../store/saveProvider";
import SavedItemRow from "./SavedItemRow";

import classes from "./SavedItems.module.css";

const SavedItems = () => {
  const { savedItems } = useSave();
  let items;
  if (savedItems && savedItems.length > 0) {
    items = savedItems.map((item) => (
      <SavedItemRow item={item} key={item.id} />
    ));
    return (
      <div className={classes.wrap}>
        <h2 className={classes.head}>Saved for later</h2>
        <div className={classes.saved}>{items}</div>
      </div>
    );
  } else {
    return <br/>;
  }
};

export default SavedItems;
