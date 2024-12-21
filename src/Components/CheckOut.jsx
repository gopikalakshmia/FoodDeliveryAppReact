import React, { useContext } from "react";
import { currencyFormattor } from "../Util/formatting";
import Input from "./Input";
import Button from "./Button";
import { CartContext } from "../Store/Cart-Context";
function CheckOut({handleClose}) {
  const { items } = useContext(CartContext);
  const CartTotal = items.reduce(
    (acc, val) => acc + val.item.price * val.Qty,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const orderData = Object.fromEntries(fd.entries());
    console.log(orderData);
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ order: { items: items, customer: orderData } }),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>CheckOut</h2>
      <p>Total Amount: {currencyFormattor.format(CartTotal)}</p>
      <Input label="Full Name" id="name" type="text" />
      <Input label="Email Address" id="email" type="email" />
      <Input label="Street" type="TEXT" id="street" />
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" id="city" />
      </div>
      <span className="modal-actions">
        <Button type="button" textOnly onClick={handleClose}>
          Close
        </Button>
        <Button>Submit Order</Button>
      </span>
    </form>
  );
}

export default CheckOut;
