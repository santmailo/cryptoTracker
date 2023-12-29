import { useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);

  function handleDaysChange(e) {
    setDays(e.target.value);
  }

  return (
    <>
      <Header />
      <div className="coin-days-flex">
        <SelectCoin
          crypto1={crypto1}
          crypto2={crypto2}
          setCrypto1={setCrypto1}
          setCrypto2={setCrypto2}
        />

        <SelectDays days={days} handleDaysChange={handleDaysChange} />
      </div>
    </>
  );
}

export default ComparePage;
