import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExchangeRate } from "./actions";

const App = () => {
  const currencies = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR",
  ]; 
  const [baseCurrency, setBaseCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState(1);

  const exchangeRate = useSelector((state) => state.exchangeRate);
  const dispatch = useDispatch();

  const handleCurrencyChange = (event, type) => {
    const selectedCurrency = event.target.value;
    if (type === "base") {
      setBaseCurrency(selectedCurrency);
    } else {
      setTargetCurrency(selectedCurrency);
    }
  };

  const handleAmountChange = (event) => {
    const inputAmount = parseFloat(event.target.value);
    setAmount(inputAmount);
  };

  const handleConvert = () => {
    dispatch(fetchExchangeRate(baseCurrency, targetCurrency));
  };

  return (
    <div className="bg-gray-100 w-auto h-screen  flex ">
      <div className=" w-10/12 mx-auto my-auto  ">
        <div className="h-20  bg-blue-600 items-center flex justify-center ">
          <h1 className=" text-white uppercase font-extrabold text-3xl ">
            Currency Converter
          </h1>
        </div>
        <div className="bg-blue-300   h-96   ">
          <div className="w-10/12 text-white text-2xl uppercase space-y-6 bg-blue-600 mt-2 h-96 p-12 mx-auto mt-auto ">
            <div className="flex  justify-between">
              <label className="">Base Currency:</label>
              <select className="text-blue-600 rounded"
                value={baseCurrency}
                onChange={(event) => handleCurrencyChange(event, "base")}
              >
                {currencies.map((currency) => (
                  <option className="text-blue-600" key={currency} value={currency}>
                    <div className="text-blue-600">
                    {currency}

                    </div>
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between">
              <label className="">Target Currency:</label>
              <select className="text-blue-600 rounded"
                value={targetCurrency}
                onChange={(event) => handleCurrencyChange(event, "target")}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <label>Amount:</label>
              <input className="text-blue-600 w-20 rounded"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            
            </div>

            <button
                className="bg-white font-bold uppercase hover:bg-blue-600 hover:text-white text-blue-600 py-2 px-4  rounded  "
                onClick={handleConvert}
              >
                Convert
              </button>
            {exchangeRate && (
              <div  className="border bg-white rounded text-blue-600 text-center text-2xl">
                <p >
                  Exchange Rate: 1 {baseCurrency} = {exchangeRate}
                  {targetCurrency}
                </p>
                <p >
                  {amount} {baseCurrency} = {(amount * exchangeRate).toFixed(2)}
                  {targetCurrency}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
