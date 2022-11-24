import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.components";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {[].map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
