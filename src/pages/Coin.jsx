import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinObject } from "../functions/convertObject";
import Loader from "../components/Common/Loader";
import ListView from "../components/Dashboard/List";
import CoinChart from "../components/Coin/Coin Chart";
import CoinInfo from "../components/Coin/Coin Info";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res) => {
          coinObject(setCoinData, res.data);
          setIsLoading(false);
        })
        .catch(() => {
          console.log("some error occured");
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="greyWrapper">
            <ListView coin={coinData} />
          </div>
          <CoinChart coin={coinData} />
          <CoinInfo coin={coinData} />
        </>
      )}
    </>
  );
}

export default CoinPage;
