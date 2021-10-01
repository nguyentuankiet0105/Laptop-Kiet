import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: sessionStorage.getItem('cartItems')
    ? JSON.parse(sessionStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const CartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, actions) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === actions.payload.id);
      //------ check so luong hang` da co trong cart hay chua -------
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        //--- toast tang so luong san pham ----
        toast.info(`increased ${state.cartItems[itemIndex].title} in cart quantity`, {
          position: 'bottom-left',
        });
      } else {
        const tempProduct = { ...actions.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        //--- toast them san pham moi vao cart ----
        toast.success(`${actions.payload.title} added to cart`, {
          position: 'bottom-left',
        });
      }
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, actions) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== actions.payload.id
      );
      state.cartItems = nextCartItems;
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      toast.error(`${actions.payload.title} removed from cart`, {
        position: 'bottom-left',
      });
    },
    decreaseCart(state, actions) {
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === actions.payload.id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${actions.payload.title} cart quantity`, {
          position: 'bottom-left',
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== actions.payload.id
        );
        state.cartItems = nextCartItems;

        toast.error(`${actions.payload.title} removed from cart`, {
          position: 'bottom-left',
        });
      }
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart(state, actions) {
      const isOk = window.confirm('Do you want to delete all your choice ?');
      if (isOk) {
        state.cartItems = [];
        sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        toast.error(`Cart Cleared`, {
          position: 'bottom-left',
        });
      }
    },
    getTotals(state, actions) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const ItemTotal = price * cartQuantity;

          cartTotal.total += ItemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  CartReducer.actions;

export default CartReducer.reducer;
