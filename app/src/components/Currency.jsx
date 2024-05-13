import { useState } from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

let baseUrl = "https://api.freecurrencyapi.com/v1/latest";
let apiKey = "fca_live_8fnsrMqrarVZEKw9VheaZ27jZ5DCnw2IiDY8sB4z";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(1);

  const exchange = async () => {
    const response = await axios.get(
      `${baseUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currencydiv">
      <div
        style={{
          fontFamily: "arial",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div className="parentDiv">
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <select
          className="fromcurrencyoption"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowRight
          style={{ fontSize: "25px", marginTop: "10px", marginRight: "10px" }}
        />
        <select
          className="tocurrencyoption"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
        <input
          type="number"
          className="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div>
        <button className="btnCevir" onClick={exchange}>
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
