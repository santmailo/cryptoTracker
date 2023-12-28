import axios from "axios";

export function getCoinData(id) {
  console.log("getCoinData function ran");
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      console.log("coinData received");
      return res.data;
    })
    .catch(() => {
      console.log("error - function getCoinData");
    });

  return myData;
}
