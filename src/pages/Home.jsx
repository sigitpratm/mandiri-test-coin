import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultTable from "../components/DefaultTable";
import Pagination from "../components/Pagination";
import icSearch from "../assets/icSearch.png";

function Home() {
  const baseUrl = `https://api.coinpaprika.com/v1/coins`;

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const fetchCoin = async () => {
    setLoading(true);
    const res = await axios.get(baseUrl);
    setCoins(res.data);
    setLoading(false);
  };

  const idxLastPost = currentPage * postPerPage;
  const idxFirstPost = idxLastPost - postPerPage;
  const currentPost = coins.slice(idxFirstPost, idxLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="container py-4">
      {/* heading */}
      <div className="mb-5">
        <h4 className="mb-4">Coin List</h4>
        <div className="d-flex gap-3">
          <div className="d-flex w-25">
            <select className="form-select">
              <option value="1">Filter 1</option>
              <option value="2">Filter 2</option>
              <option value="3">Filter 3</option>
            </select>
          </div>
          <div className="d-flex w-25">
            <div className="me-2" style={{ position: "relative" }}>
              <img className="ic-search" src={icSearch} />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="search"
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

      {/* table */}
      <div>
        <DefaultTable loading={loading} data={currentPost} />

        <div className="d-flex justify-content-end">
          <Pagination
            postPerPage={postPerPage}
            totalPost={50}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
