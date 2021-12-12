import React from "react";
import { useCart } from "../../store/cartProvider";
import { useSave } from "../../store/saveProvider";
import { formatPrice } from "../../lib/helper";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import classes from "./CartRow.module.css";

const CartRow = ({ item }) => {
  const { addToCart, removeFromCart, clearCartItem } = useCart();
  const { addToSave } = useSave();

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
          <div className={classes.count}>
            <button
              type="button"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              <FaMinus size={15} />
            </button>
            <h3>{item.amount}</h3>
            <button
              type="button"
              onClick={() => {
                addToCart({ ...item, amount: 1 });
              }}
            >
              <FaPlus size={15} />
            </button>
          </div>
          <button
            type="button"
            className={classes.delete}
            onClick={() => {
              clearCartItem(item.id);
            }}
          >
            Delete <FaTrashAlt size={20} />
          </button>
          <button
            type="button"
            className={classes[`btn-sec`]}
            onClick={() => {
              addToSave(item);
              clearCartItem(item.id);
            }}
          >
            Save for later
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartRow;
