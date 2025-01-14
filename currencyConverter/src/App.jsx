import { useState, useEffect } from "react";
import "./App.css";
import useCurrencyInfo from "../hooks/useCurrency.js";
import { InputBox } from "../components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Swap the "from" and "to" currencies and update the amounts
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Set the current converted amount as the new input amount
  };

  // Real-time conversion whenever the amount, from, or to changes
  useEffect(() => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(Math.round(amount * currencyInfo[to])); // Update the converted amount
  }, [amount, from, to, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3564390/pexels-photo-3564390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <div className="w-full mb-1">
          <InputBox
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(newAmount) => setAmount(newAmount)}
            selectCurrency={from}
          />
        </div>
        <div className="relative w-full flex justify-center items-center my-4">
          <button
            className="border-1 border-white rounded-md bg-blue-600 text-white px-4 py-1"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        <div className="w-full mb-1">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
