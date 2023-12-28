import axios from "axios";

export function getCoinPrices(id, days, priceType) {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((res) => {
      return res.data[priceType];
    })
    .catch((err) => console.log("some error", err));
}
