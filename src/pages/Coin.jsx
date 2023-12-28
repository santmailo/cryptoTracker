import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertObject } from "../functions/convertObject";
import Loader from "../components/Common/Loader";
import ListView from "../components/Dashboard/List";
import LineChart from "../components/Coin/Line Chart";
import CoinInfo from "../components/Coin/Coin Info";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
// import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";

function CoinPage() {
  const { id } = useParams();
  const [days, setDays] = useState(7);
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id); // fething

    if (data) {
      convertObject(setCoinData, data);
    }
    const prices = await getCoinPrices(id, days); // fething

    if (prices.length > 0) {
      settingChartData(setChartData, prices);
    }
    setIsLoading(false);
    d;
  }

  // async function handleDaysChange(event) {
  //   // setIsLoading(true);
  //   // setDays(event.target.value);
  // }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="greyWrapper">
            <ListView coin={coinData} />
          </div>
          <div className="greyWrapper">
            <SelectDays days={days} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo coin={coinData} />
        </>
      )}
    </>
  );
}

export default CoinPage;
