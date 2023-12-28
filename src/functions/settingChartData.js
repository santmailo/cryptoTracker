import { convertDate } from "./convertDate";

export function settingChartData(setChartData, prices) {
  console.log("settingChartData function ran");
  setChartData({
    labels: prices.map((price) => convertDate(price[0])),
    datasets: [
      {
        data: prices.map((price) => price[1]),
        fill: true,
        borderColor: "#3a80e9",
        borderWidth: 1.5,
        tension: 0.25,
        backgroundColor: "rgba(58, 128, 233, 0.1)",
        pointRadius: 0,
      },
    ],
  });
}
