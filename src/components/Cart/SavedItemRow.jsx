import React from "react";
import { useSave } from "../../store/saveProvider";
import { useCart } from "../../store/cartProvider";
import { formatPrice } from "../../lib/helper";

import classes from ".//SavedItemRow.module.css";

const SavedItemRow = ({item}) => {
  const { removeFromSave } = useSave();
  const { addToCart } = useCart();

 const subTotal = item.amount * item.price;
 const formattedSubtotal = formatPrice(subTotal);
 const discount = item.discount;
 const discountPrice = formatPrice(
   (item.price * item.amount * (100 - discount)) / 100
 );

  return (
    <article className={classes[`table-row`]} key={item.id}>
      <img
        src={item.image}
        alt={item.name}
        height={140}
        width={160}
        className={classes.thumbnail}
      />
      <div className={classes.details}>
        <h2>{item.name}</h2>
        <h3>{item.company}</h3>
        <div className={classes.prices}>
          <h2 className={classes.price}>{discountPrice}</h2>
          <h2 className={classes[`og-price`]}>{formattedSubtotal}</h2>
        </div>
        <div className={classes.responsive}>
          <button
            type="button"
            className={classes.delete}
            onClick={() => {
              removeFromSave(item.id);
            }}
          >
            Delete
          </button>
          <button
            type="button"
            className={classes[`btn-sec`]}
            onClick={() => {
              addToCart(item);
              removeFromSave(item.id);
            }}
          >
            Move to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default SavedItemRow;
