import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { convertObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/Common/Loader";
import ListView from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/Coin Info";
import settingChartData from "../functions/settingChartData";
import LineChart from "../components/Coin/Line Chart";
import TogglePriceType from "../components/Coin/PriceType";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1); // fething
    const data2 = await getCoinData(crypto2); // fething

    if (data1) {
      convertObject(setCrypto1Data, data1);
    }
    if (data2) {
      convertObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType); // fething
      const prices2 = await getCoinPrices(crypto2, days, priceType); // fething

      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        console.log("both prices fetched", prices1, prices2);
        setIsLoading(false);
      }
    }
  }

  async function handleCoinChange(event, isCoin2) {
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value); // fething
      convertObject(setCrypto2, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType); // fething
      const prices2 = await getCoinPrices(crypto2, days, priceType); // fething

      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value); // fething
      convertObject(setCrypto1, data);
    }
  }

  async function handleDaysChange(e) {
    setIsLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(crypto1, e.target.value, priceType); // fething
    const prices2 = await getCoinPrices(crypto2, e.target.value, priceType); // fething
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  async function handlePriceTypeChange(e) {
    setIsLoading(true);
    const prices1 = await getCoinPrices(crypto1, days, e.target.value); // fething
    const prices2 = await getCoinPrices(crypto2, days, e.target.value); // fething
    settingChartData(setChartData, prices1, prices2);
    setPriceType(e.target.value);
    setIsLoading(false);
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoin
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />

            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="greyWrapper">
            <ListView coin={crypto1Data} />
          </div>
          <div className="greyWrapper">
            <ListView coin={crypto2Data} />
          </div>
          <div className="greyWrapper">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceTypes={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo coin={crypto1Data} />
          <CoinInfo coin={crypto2Data} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
