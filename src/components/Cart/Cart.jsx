import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../store/cartProvider";
import CartRow from "./CartRow";
import CartActions from "./CartActions";
import SavedItems from "./SavedItems";

import classes from "./Cart.module.css";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const items = cartItems.map((item) => <CartRow item={item} key={item.id} />);

  if (cartItems.length === 0) {
    return (
      <>
        <div className={`${classes.container} ${classes.shop}`}>
          <h2>Empty Cart!</h2>
          <Link to="/">Continue Shopping</Link>
        </div>
        <SavedItems />
      </>
    );
  } else
    return (
      <>
        <div className={classes.container}>
          <div>{items}</div>
          <div className={classes.summary}>
            <h2>Summary</h2>
            <CartActions />
            <section className={classes.actions}>
              <Link to="/">Continue Shopping</Link>
              <button type="button" onClick={clearCart}>
                Clear Shopping Cart
              </button>
            </section>
          </div>
        </div>
        <SavedItems />
      </>
    );
};

export default Cart;
