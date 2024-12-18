import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartLength: 0,
});

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [length, setLength] = useState(0);

  const addItemToCart = (newItem) => {
    let findIndexCart = cart.findIndex((val) => val.item.id === newItem.id);
    console.log(findIndexCart);
    if (findIndexCart === -1)
      setCart((prevItem) => [...prevItem, { item: newItem, Qty: 1 }]);
    else {
      let existigItem = cart[findIndexCart];
      let cartItemtToUpdate = { ...existigItem, Qty: existigItem.Qty + 1 };
      cart[findIndexCart] = cartItemtToUpdate;
    }
    setLength((prevLength) => prevLength + 1);
  };

  const removeFromCart = (newItem) => {
    let findIndexCart = cart.findIndex((val) => val.item.id === newItem.id);
    console.log(findIndexCart);
    if (findIndexCart > -1){
        let existigItem = cart[findIndexCart];
        if(existigItem.Qty>1){
            let cartItemtToUpdate = { ...existigItem, Qty: existigItem.Qty - 1 };
            cart[findIndexCart] = cartItemtToUpdate;
        }
        else
        {
            setCart(prevCart=>{
                return(prevCart.filter(product=>product.item.id!=existigItem.item.id))
            })
        }
       
    }
    else {
      
    }
    setLength((prevLength) => prevLength + 1);
  };

  const ValContext = {
    items: cart,
    addToCart: addItemToCart,
    removeFromCart:removeFromCart,
    cartLength: length,
    
  };
  return (
    <CartContext.Provider value={ValContext}>{children}</CartContext.Provider>
  );
}
