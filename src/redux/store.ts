import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { bankReducer } from './reducers';

const reducers = combineReducers({
  bank: bankReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type Store = ReturnType<typeof reducers>;
export default store;
