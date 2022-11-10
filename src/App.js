import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  let total = 0.00;

  return (
    <div className="App">
      <h1>My Bakery</h1> 
      {bakeryData.map((item, index) => (
       <BakeryItem 
       index={index}
       name={item.name} 
       image={item.image} 
       description={item.description} 
       price={item.price}
       setCart={setCart}
       cart={cart}

       ></BakeryItem>
      ))}

      <div>
        <h2>Cart</h2>
        {cart.map(({name, price, quantity}) => {
          total += price * quantity
          return (<p>{quantity} x {name}: ${price} </p>);
        })}
        <p>Total: $ {total}</p>
        
      </div>
    </div>
  );
}

export default App;
