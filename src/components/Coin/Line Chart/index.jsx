import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber } from "../../../functions/convertNumber";

function LineChart({ chartData, priceTypes, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    resposive: true,
    interactions: {
      mode: "index",
      interactions: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (priceTypes == "prices") return "$" + value.toLocaleString();
            else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
      crypto2: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (priceTypes == "prices") return "$" + value.toLocaleString();
            else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
