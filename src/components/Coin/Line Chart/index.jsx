import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this

// eslint-disable-next-line react/prop-types
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
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
