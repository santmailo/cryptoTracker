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
import settingChartData from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { id } = useParams();
  const [days, setDays] = useState(7);
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    setIsLoading(true);
    const data = await getCoinData(id); // fething

    if (data) {
      convertObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType); // fething

      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  async function handleDaysChange(event) {
    setIsLoading(true);
    const prices = await getCoinPrices(id, event.target.value, priceType); // fething

    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setDays(event.target.value);
  }

  async function handlePriceTypeChange(event) {
    setIsLoading(true);
    const prices = await getCoinPrices(id, days, event.target.value); // fething

    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setPriceType(event.target.value);
  }

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
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceTypes={priceType} />
          </div>
          <CoinInfo coin={coinData} />
        </>
      )}
    </>
  );
}

export default CoinPage;
