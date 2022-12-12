import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDetail = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.coinpaprika.com/v1/coins/${id}`);
      res.status == 200 && setDetail(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <h4 className="mb-5">Coin Detail</h4>

        <div>
          <div className="row row-cols-4 mb-4">
            <div className="col fw-bold">Id</div>
            <div className="col-6">{detail.id}</div>
          </div>
          <div className="row row-cols-4 mb-4">
            <div className="col fw-bold">Name</div>
            <div className="col-6">{detail.name}</div>
          </div>
          <div className="row row-cols-4 mb-4">
            <div className="col fw-bold">Symbol</div>
            <div className="col-6">{detail.symbol}</div>
          </div>
          <div className="row row-cols-4 mb-4">
            <div className="col fw-bold">Type</div>
            <div className="col-6">{detail.type}</div>
          </div>
          <div className="row row-cols-4 mb-4">
            <div className="col fw-bold">Active</div>
            <div className="col-6">{detail.is_active ? "true" : "false"}</div>
          </div>
          <div className="row row-cols-4 mb-4">
            <div className="col fw-bold">Is New</div>
            <div className="col-6">{detail.is_new ? "true" : "false"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
