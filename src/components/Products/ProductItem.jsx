import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../lib/helper";
import { useCart } from "../../store/cartProvider";
import classes from "./ProductItem.module.css";

const ProductItem = ({ data }) => {
  const navigate = useNavigate();
  const priceFormatted = formatPrice(data.price);
  const [inCart, setinCart] = useState(false);

  const discount = data.discount;
  const discountPrice = formatPrice((data.price * (100 - discount)) / 100);

  const { addToCart, cartItems } = useCart();


  useEffect(() => {
    const cartIndex =
      cartItems && cartItems.findIndex((cartItem) => cartItem.id === data.id);
    const isInCart = cartIndex === -1 ? false : true;
    setinCart(isInCart);
  }, [data.id, cartItems]);



  const addToCartHandler = () => {
    const productData = {
      id: data.id,
      name: data.title,
      company: data.brand,
      image: data.image,
      price: data.price,
      discount: data.discount,
      amount: 1,
    };
    addToCart(productData);
  };
  const goToCartHandler = () => {
    navigate("/cart");
  };
  return (
    <div className={classes.wrapper}>
      <img src={data.image} alt="placeholder" height="275" width="250" />
      <div className={classes.details}>
        <p className={classes.brand}>{data.brand}</p>
        <h3 className={classes.title}>
          {data.title.slice(0, 20)}
          {data.title.length > 20 ? "..." : ""}
        </h3>
        <div className={classes.prices}>
          <h3 className={classes.price}>{discountPrice}</h3>
          <h3 className={classes[`og-price`]}>{priceFormatted}</h3>
        </div>
        <h4 className={classes.size}>
          size:
          {data.size.map((size, index) => (
            <span className={classes.options} key={index}>
              {size}
            </span>
          ))}
        </h4>
      </div>
      <div className={classes.cta}>
        <button
          type="button"
          className={`${classes.btn} ${classes[`btn-primary`]}`}
          onClick={inCart ? goToCartHandler : addToCartHandler}
        >
          {inCart ? `Go to Cart` : `Add to Cart`}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
