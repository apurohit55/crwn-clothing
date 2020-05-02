import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
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

*/

// cmd + \
