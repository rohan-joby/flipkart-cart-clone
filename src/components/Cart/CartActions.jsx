import React from "react";

import { useCart } from "../../store/cartProvider";
import { formatPrice } from "../../lib/helper";
import classes from "./CartActions.module.css";

const CartActions = () => {
  const { cartTotalAmount, cartItems } = useCart();

  let discount = cartItems.map((item) =>
    formatPrice((item.price * item.discount) / 100)
  );
  let realDiscount = cartItems.reduce((acc, curr) => acc + (curr.price * curr.discount) / 100,0);
  
  const totalDiscount = discount.reduce((acc, curr) => {
    const current = curr.slice(1);
    return acc + parseFloat(current);
  }, 0);

  const formattedSubTotal = formatPrice(cartTotalAmount);
  const total = Number(cartTotalAmount - realDiscount);
  const formattedTotal = formatPrice(total);

  return (
    <>
      <section className={classes.wrapper}>
        <article className={classes.summary}>
          <div>
            <h3>Sub Total:</h3>
            <h3>{formattedSubTotal}</h3>
          </div>
          <div>
            <p>Discount:</p>
            <p>{totalDiscount}</p>
          </div>
          <hr />
          <div>
            <h3>Total:</h3>
            <h3>{formattedTotal}</h3>
          </div>
        </article>
      </section>
    </>
  );
};

export default CartActions;
