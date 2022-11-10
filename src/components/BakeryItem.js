import "./BakeryItem.css"
export default function BakeryItem(props) {
	function handleClick() {
    const itemInCart = {name: props.name, price: props.price, quantity: 1};
    const itemExistInCart = props.cart.find((element) => element.name === props.name);
    if (itemExistInCart !== undefined) {
      props.setCart(
        props.cart.map((element) => {
          if (element === itemExistInCart) {
            return {name: props.name, price: props.price, quantity: element.quantity + 1};
          } else {
            return element;
          }
        })
      );
    } else {
      props.setCart(props.cart.concat(itemInCart));
    }
  };
  return (
		 <div>
        <h2> {props.name}</h2>
        <img src={props.image} alt={props.description}/>
        <p> Price: ${props.price}</p>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
	);
}
