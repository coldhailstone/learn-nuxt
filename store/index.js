import { fetchCartItems } from "~/api";

// constant
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

// store
export const state = () => ({
  cartItems: []
});

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    });
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }, cartItem) {
    const { data } = await fetchCartItems(cartItem);
    commit('setCartItems', data);
  }
}