import React from "react";
import CartItem from "./CartItem";

//class Cart extends React.Component
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((prod) => {
        return (
          <CartItem
            product={prod}
            key={prod.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            handleDeleteProduct={props.handleDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
