import * as React from 'react';
import { Link } from 'react-router-dom';
import { LeftCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart, decreaseCart, addToCart, clearCart, getTotals} from "../../Redux/Reducer/cartReducer"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTotals())
  },[cart, dispatch])
  const handelRemoveFromCart =(Item) => {
    dispatch(removeFromCart(Item))
  }
  const handelDecreaseCart =(Item) => {
    dispatch(decreaseCart(Item))
  }
  const handelIncreaseCart =(Item) => {
    dispatch(addToCart(Item))
  }
  const handelClearCart =() => {
    dispatch(clearCart())
  }
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
        </div>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3>No product are added</h3>
            <div className="start-shopping">
              <Link to="/home">
                <Button>
                  <LeftCircleFilled />
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((Item) => (
                  <div className="cart-item" key={Item.id}>
                    <div className="cart-product">
                      <img src={Item.src} alt={Item.title} />
                      <div>
                        <h3>{Item.title}</h3>
                        <p>{Item.content}</p>
                        <button onClick={()=> handelRemoveFromCart(Item)}>
                          Remove
                        </button>
                      </div>
                      <div className="cart-product-price">${Item.price}</div>
                      <div className="cart-product-quantity">
                        <button onClick={() => handelDecreaseCart(Item)}>-</button>
                        <div className="count">{Item.cartQuantity}</div>
                        <button onClick={() => handelIncreaseCart(Item)}>+</button>
                      </div>
                      <div className="cart-product-total-price">
                        ${Item.price * Item.cartQuantity}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handelClearCart()}>Clear Cart</button>
            </div>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount"> ${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button >Check out</button>
              <div className="continue-shopping">
              <Link to="/home">
                <button >
                  continue Shopping
                </button>
              </Link>
            </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
