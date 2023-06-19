import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import { Notification } from "./components/Notification";
import Layout from "./components/Layout";

function App() {
  const cart=useSelector(state=>state.cart);
  useEffect(()=>{
    const sendRequest=async()=>{
      const res= await fetch('https://redux-http-bcbba-default-rtdb.firebaseio.com/cartItems.json',{
      method:"PUT",
      body:JSON.stringify(cart),

    });
    const data=await res.json();
    };
   sendRequest();
  },[cart])
  const isLogedIn=useSelector(state=>state.auth.isLogedIn);
  const cartitems=useSelector(state=>state.cart.itemList);
  
  return (
    <div className="App">
      <Notification type='success' message={'This is dummy messagge'} />
      {!isLogedIn && <Auth />}
    { isLogedIn && <Layout />}
    </div>
  );
}

export default App;
