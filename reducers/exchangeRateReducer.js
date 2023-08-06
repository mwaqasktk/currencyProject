import { FETCH_EXCHANGE_RATE_SUCCESS, FETCH_EXCHANGE_RATE_FAILURE } from '../actions';

const initialState = null;

const exchangeRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_RATE_SUCCESS:
      return action.payload;
    case FETCH_EXCHANGE_RATE_FAILURE:
      return null;
    default:
      return state;
  }
};

export default exchangeRateReducer;
