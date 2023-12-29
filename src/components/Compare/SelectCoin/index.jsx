import { MenuItem, Select } from "@mui/material";
import "./styles.css";
import { useEffect, useState } from "react";
import { get100Coins } from "../../../pages/get100Coins";
import Loader from "../../Common/Loader";

// eslint-disable-next-line react/prop-types
function SelectCoin({ crypto1, crypto2, setCrypto1, setCrypto2 }) {
  const [allCoins, setAllCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const coinData = await get100Coins();
    setAllCoins(coinData);
    setIsLoading(false);
  }

  function handleCoinChange(event, isCoin2) {
    console.log(event.target.value);
    if (isCoin2) {
      setCrypto2(event.target.value);
    } else {
      setCrypto1(event.target.value);
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="coins-flex">
          <p>Crypto 1</p>
          <Select
            sx={styles}
            value={crypto1}
            label="Crypto 1"
            onChange={(e) => handleCoinChange(e, false)}
          >
            {allCoins.map((coin) => (
              <MenuItem key={coin.id} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>

          <p>Crypto 2</p>
          <Select
            sx={styles}
            value={crypto2}
            label="Crypto 2"
            onChange={(e) => handleCoinChange(e, true)}
          >
            {allCoins.map((coin) => (
              <MenuItem key={coin.id} value={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
    </>
  );
}
export default SelectCoin;
