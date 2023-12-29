import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTopButton";
import { get100Coins } from "./get100Coins";

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
    getData();
  }, [coins]);

  async function getData() {
    // localStorage.setItem("coins", JSON.stringify(res.data));
    const myCoins = await get100Coins();
    if (myCoins) {
      localStorage.setItem("coins", JSON.stringify(myCoins));
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  }

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
