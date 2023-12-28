import axios from "axios";

export function getCoinData(id) {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      console.log("error - function getCoinData");
    });

  return myData;
}
