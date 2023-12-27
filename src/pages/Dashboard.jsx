import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTopButton";

function DashboardPage() {
  const [coins, setCoins] = useState(
    JSON.parse(localStorage.getItem("coins")) || []
  );

  // it is taking note of which page user has clicked to visit
  const [page, setPage] = useState(1);
  // this section sets the coins according to the page number clicked
  const [paginatedCoins, setPaginatedCoins] = useState(coins.slice(0, 11));

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 12;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 11));
  };

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(e) {
    const localCoin = JSON.parse(localStorage.getItem("coins"));
    const newCoins = localCoin.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchTerm(e.target.value);
    setCoins(newCoins);
  }
  // loader state which is set to true by default
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        localStorage.setItem("coins", JSON.stringify(res.data));
        setCoins(res.data);
      })
      .catch(() => console.log("some error occured"));
    setIsLoading(false);
  }, [coins]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Search handleSearch={handleSearchTerm} />
          <TabsComponent coins={searchTerm != "" ? coins : paginatedCoins} />
          <BackToTop />
          {searchTerm == "" ? (
            <PaginationControlled page={page} handleChange={handlePageChange} />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
