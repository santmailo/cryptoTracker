/* eslint-disable react/prop-types */
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types

function ListView({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr
        className={
          coin.price_change_percentage_24h >= 0
            ? "coin-list-container"
            : "coin-list-container coin-list-container-negative"
        }
      >
        <Tooltip title={coin.name}>
          <td className="coin-header coin-list-header">
            <div className="coin-img coin-list-img">
              <img src={coin.image} />
            </div>
            <div className="coin-info coin-list-info">
              <p className="coin-symbol coin-list-symbol">{coin.symbol}</p>
              <p className="coin-name coin-list-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price Change in 24 hours">
          <td className="coin-changes coin-changes-list">
            <p
              className={`recent-changes list-changes ${
                coin.price_change_24h >= 0 ? "changes-plus" : "changes-minus"
              }`}
            >
              {coin.price_change_percentage_24h >= 0 ? "+" : ""}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <div
              className={
                coin.price_change_24h >= 0
                  ? "coin-price-icons-positive hideIcon"
                  : "coin-price-icons-negative hideIcon"
              }
            >
              {coin.price_change_24h >= 0 ? (
                <TrendingUpRoundedIcon />
              ) : (
                <TrendingDownRoundedIcon />
              )}
            </div>
          </td>
        </Tooltip>
        <td className="coin-info-market">
          <Tooltip title="Current Price">
            <span
              className={
                coin.price_change_percentage_24h >= 0
                  ? "coin_price current_price"
                  : "coin_price current_price current_price_negative"
              }
            >
              ${coin.current_price.toLocaleString()}
            </span>
          </Tooltip>
          <div className="market-volume">
            <Tooltip title="Total Volume">
              <span className="coin-info">
                $ {coin.total_volume.toLocaleString()}
              </span>
            </Tooltip>
            <Tooltip title="Market Cap">
              <span className="coin-info">
                $ {coin.market_cap.toLocaleString()}
              </span>
            </Tooltip>
          </div>
        </td>
      </tr>
    </Link>
  );
}

export default ListView;
