import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function DefaultTable({ data, loading }) {
  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <Table striped>
      <thead className="bg-secondary text-white">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Rank</th>
          <th>Type</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, idx) => (
          <tr key={idx}>
            <td
              onClick={() => navigate(`/detail/${data.id}`)}
              style={{ cursor: "pointer" }}
            >
              {data.id}
            </td>
            <td>{data.name}</td>
            <td>{data.symbol}</td>
            <td>{data.rank}</td>
            <td>{data.type}</td>
            <td>{data.is_active === true ? "true" : "false"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DefaultTable;
