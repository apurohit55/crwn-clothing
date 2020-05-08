import { createSelector } from 'reselect';
// import { setCurrentUser } from './user.actions';

const selectUser = (state) => state.user;
const selectCart = (state) => state.cart;
export const selectCurrentUser = createSelector([ selectUser ], (user) => user.currentUser);
