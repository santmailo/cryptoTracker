import axios from "axios";

export function getCoinPrices(id, days) {
  console.log("getCoinPrices function ran");
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((res) => {
      return res.data.prices;
    })
    .catch((err) => console.log("some error", err));
}
