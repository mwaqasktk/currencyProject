import { combineReducers } from 'redux';
import exchangeRateReducer from './exchangeRateReducer';

const rootReducer = combineReducers({
  exchangeRate: exchangeRateReducer,
});

export default rootReducer;
