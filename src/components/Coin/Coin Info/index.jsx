/* eslint-disable react/prop-types */
import React from "react";
import "./styles.css";

function CoinInfo({ coin }) {
  const [flag, setFlag] = React.useState(true);

  function handleReadMore() {
    setFlag(!flag);
  }

  const shortDesc =
    coin.desc.slice(0, 350) +
    "<span style='color: var(--grey)'> Read More....</span>";

  const longDesc =
    coin.desc + "<span style='color: var(--grey)'> Read Less....</span>";

  return (
    <div className="greyWrapper">
      <h1 className="coinInfo-header">{coin.name}</h1>
      <p
        className="coinInfo-desc"
        onClick={handleReadMore}
        dangerouslySetInnerHTML={{
          __html:
            coin.desc.length > 200 ? (flag ? shortDesc : longDesc) : coin.desc,
        }}
      />
    </div>
  );
}

export default CoinInfo;
