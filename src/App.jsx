import { useState } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import { CartContextProvider } from './Store/Cart-Context';
import Cart from './Components/Cart';

function App() {


  return (
    <>
  
   <CartContextProvider>
   <Header/>
   <Products/>
   </CartContextProvider>
   </>
  );
}

export default App;
