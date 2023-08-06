import axios from 'axios';

export const FETCH_EXCHANGE_RATE_SUCCESS = 'FETCH_EXCHANGE_RATE_SUCCESS';
export const FETCH_EXCHANGE_RATE_FAILURE = 'FETCH_EXCHANGE_RATE_FAILURE';

export const fetchExchangeRate = (baseCurrency, targetCurrency) => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const exchangeRate = response.data.rates[targetCurrency];
      dispatch({
        type: FETCH_EXCHANGE_RATE_SUCCESS,
        payload: exchangeRate,
      });
    } catch (error) {
      dispatch({
        type: FETCH_EXCHANGE_RATE_FAILURE,
        payload: error.message,
      });
    }
  };
};

