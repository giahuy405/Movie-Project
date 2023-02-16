import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";
import { bookingReducer } from '../features/Booking/bookingSlice'
const rootReducer = combineReducers({
    bookingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
