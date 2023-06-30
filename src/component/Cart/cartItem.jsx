import { Button } from "react-bootstrap";

const CartItem = ({ item, onAdd, onRemove }) => {
    const { name, quantity } = item;
  
    return (
      <div className="cart-item">
        <span>{name} </span>
        {/* <span>{price}</span> */}
        <Button onClick={onAdd} className="px-1 py-0 bg-white text-dark  "> +</Button>
        <span>{quantity}</span>
        <Button onClick={onRemove} className="px-1 py-0 bg-white text-dark "> - </Button>
      </div>
    );
  };
export default CartItem  