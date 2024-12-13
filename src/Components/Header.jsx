import logo from "../assets/logo.jpg";
import Button from "./Button";
import {CartContext} from "../Store/Cart-Context";
import {useContext} from 'react';

function Header() {
const {cartLength}=useContext(CartContext);
console.log(cartLength);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <Button textOnly>Cart ({cartLength})</Button>
    </header>
  );
}

export default Header;
