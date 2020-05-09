import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});

/*

export const X;
export const Y;
import { X, Y } from './x'

export default X; // => can only have ONE default export per file
export const Y;
import X, { Y } from './x';
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component';
import CartActionTypes from './cart.types';
import CartActionTypes from '../user/cart/cart.types';

*/

// cmd + \
