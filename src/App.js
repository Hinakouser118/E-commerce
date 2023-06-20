import React, { useEffect, useState } from 'react'
import Products from './components/Products/Products'
import Navbar from './components/Products/Navbar/Navbar';
import { commerce } from './lib/commerce';
import Cart from './components/Products/Cart/Cart';
import Checkout from './components/Products/CheckoutForm/CheckOut/Checkout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export default function App() {
  const [products, setProducts]=useState([]);
  const [cart,setCart]=useState({});
  const [order,setOrder]=useState({});
  const [errorMessage,setErrorMessage]=useState('');
  const fetchProduct = async ()=>{
const { data } = await commerce.products.list();
setProducts(data);
  }
  const fetchCart = async ()=>{
   setCart(await commerce.cart.retrieve())
  
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
    };
  const handleUpdateCartQty = async (productId, quantity) => {
  const item = await commerce.cart.update(productId, { quantity });
  setCart(item);
  };
  const handleRemoveFromCart = async (productId) => {
  const item = await commerce.cart.remove(productId);
  setCart(item);
  };
  const handleEmptyCart = async () => {
  const item = await commerce.cart.empty();
  setCart(item);
  };
  const refreshCart =async ()=>{
    const newCart= await commerce.cart.empty();
    setCart(newCart)
  }
  const  handleCaptureCheckout =async(CheckoutTokenId,newOrder)=>{
    try{
      const incomingOrder= await commerce.checkout.capture(CheckoutTokenId,newOrder)
    setOrder(incomingOrder)
    refreshCart();
    }catch(error){
setErrorMessage(error.data.error.message);
    }
  }
  useEffect(()=>{
    fetchProduct();
    fetchCart();
  }, [])
  // console.log(products)
  console.log(cart);
  return (
    <Router>
    <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route exact path='/'element={ <Products products={products} onAddToCart={handleAddToCart} />}>
       </Route>
      <Route exact path='/cart' element={ <Cart cart={cart} 
      handleUpdateCartQty={handleUpdateCartQty} 
      handleRemoveFromCart={handleRemoveFromCart} 
      handleEmptyCart={handleEmptyCart}  />}>
      </Route>
      {/* <Route exact path="/cart" element={<Cart cart={cart} handleEmptyCart={handleEmptyCart} />}/> */}
      <Route exact path='/checkout' element={<Checkout cart={cart} order={order} onCaptureCheckout={ handleCaptureCheckout} error={errorMessage}/>}></Route>
      </Routes>
 </div>
 </Router>
  )
}

