import { useContext, useState } from "react";
import {CartContext} from "../Store/Cart-Context";

function Button({ item,children,textOnly,className, ...props }) {

  const {addToCart}=useContext(CartContext);
let cssClass=textOnly?'text-button':'button';
cssClass+=' '+className;
  return (
    <>
    
      <p>
        <button className={cssClass} onClick={()=>addToCart(item)} {...props}>{children}</button>
        </p>
    </>
  );
}

export default Button;
