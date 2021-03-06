import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import authReducer from './auth.reducers';
import productReducer from './product.reducer';
import cartReducer from './cart.reducers';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
});

export default rootReducer;