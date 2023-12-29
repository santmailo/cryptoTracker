import { useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Compare/SelectCoin";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  return (
    <>
      <Header />
      <SelectCoin
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1={setCrypto1}
        setCrypto2={setCrypto2}
      />
    </>
  );
}

export default ComparePage;
