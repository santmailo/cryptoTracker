/* eslint-disable react/prop-types */
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";

function GridView({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={
          coin.price_change_24h >= 0
            ? "coin-grid-container"
            : "coin-grid-container coin-grid-container-negative"
        }
      >
        <div className="coin-header">
          <div className="coin-img">
            <img src={coin.image} />
          </div>
          <div className="coin-info">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        <div className="coin-changes">
          <p
            className={`recent-changes ${
              coin.price_change_24h >= 0 ? "changes-plus" : "changes-minus"
            }`}
          >
            {coin.price_change_percentage_24h >= 0 ? "+" : ""}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <div
            className={
              coin.price_change_24h >= 0
                ? "coin-price-icons-positive"
                : "coin-price-icons-negative"
            }
          >
            {coin.price_change_24h >= 0 ? (
              <TrendingUpRoundedIcon />
            ) : (
              <TrendingDownRoundedIcon />
            )}
          </div>
        </div>

        <div className="coin_market">
          <p
            className={
              coin.price_change_percentage_24h >= 0
                ? "current_price"
                : "current_price current_price_negative"
            }
          >
            ${coin.current_price.toLocaleString()}
          </p>
          <p className="total_volume">
            Total Volume : ${coin.total_volume.toLocaleString()}
          </p>
          <p className="market_cap">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default GridView;
