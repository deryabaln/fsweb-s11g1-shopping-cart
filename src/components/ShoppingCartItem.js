import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import CartContext from "../contexts/CartContext";

const Item = (props) => {

  const { cart, setCart, localStorageWrite } = useContext(CartContext);

  const removeItem = () => {
    const updatedSepet = cart.filter((cartItem) => cartItem.id !== props.id);
    localStorageWrite(updatedSepet);
    setCart(updatedSepet);
  };

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.item)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;

