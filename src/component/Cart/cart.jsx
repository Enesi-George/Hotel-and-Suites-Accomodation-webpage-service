import CartItem from "./cartItem";
import PaystackPayment from '../Cart/paymentTest';


const Cart = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subTotalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalVat = subTotalPrice * 0.1 //10%
    const totalPrice = subTotalPrice + totalVat;
  
    return (
      <div className="cart">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={() => onAddToCart(item)}
            onRemove={() => onRemoveFromCart(item)}
          />
        ))}
        <div className="total">
          <span>Sub-Total: </span>
          <span>{subTotalPrice}</span>
        </div>
        <div className="total">
          <span>VAT @ 10%: </span>
          <span>{totalVat}</span>
        </div>

        <div className="total">
          <span>Total: </span>
          <span>{totalPrice}</span>
        </div>


        <div className="item-count">
          <span>Items in Cart: </span>
          <span>{totalItems}</span>
        </div>


        <div>
            <PaystackPayment totalPrice = {totalPrice}/>
            </div>
      </div>
    );
  };
  export default Cart;