
const CartItem = ({ item, onAdd, onRemove }) => {
    const { name, quantity } = item;
  
    return (
      <div className="cart-item">
        <span>{name} </span>
        {/* <span>{price}</span> */}
        <a href="#" onClick={onAdd} className="p-1 fw-bold fs-4 link-underline-light "> +</a>
        <span>{quantity}</span>
        <a href="#" onClick={onRemove} className="p-1 fw-bold fs-4 link-underline-light "> - </a>
      </div>
    );
  };
export default CartItem  