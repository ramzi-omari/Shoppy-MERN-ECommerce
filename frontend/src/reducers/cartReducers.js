import { CART_ADD_ITEM } from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          // iterate the cartItems, when id= existeitem we select item(newpayload) else we fill in x (previous state)
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          // current items already in cart state and add 'item' to it
          cartItems: [...state.cartItems, item],
        }
      }
    default:
      return state
  }
}
