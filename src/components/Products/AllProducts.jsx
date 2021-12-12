import React, { useState, useEffect }  from "react";
import data from "../../db.json"
//import { useFilters } from "../../store/filter-Provider";
import ProductItem from "./ProductItem";

import classes from "./ProductItem.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    let products = JSON.stringify(data);
    products = JSON.parse(products);
    setProducts(products);
  },[]);
  let allProducts;
  if (products && products.length > 0) {
    allProducts = products.map((prdt) => (
      <ProductItem key={prdt.id} data={prdt} />
    ));
    return <div className={classes.grid}>{allProducts}</div>;
  } else {
    allProducts = (
      <>
        <h2>Sorry, No products match the search parameters</h2>
        <h3>Please modify the files!</h3>
      </>
    );
    return <div className={classes.empty}>{allProducts}</div>;
  }
};

export default AllProducts;
