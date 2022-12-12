import React, { useState } from "react";

function Pagination({ postPerPage, totalPost, paginate, currentPage }) {
  const [page, setPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (num) => {
    paginate(num);
    setPage(num);
  };

  const prev = () => {
    console.log(page);
    if (page >= 1) {
      setPage(page - 1);
      paginate(page);
    }
    // page <= 1 && paginate(page);
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button onClick={() => prev()} className="btn">
            prev
          </button>
        </li>
        {pageNumbers.map((number, idx) => (
          <li key={idx} className="list">
            <button
              className={`page-link ${currentPage === number ? "active" : ""}`}
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button className="btn">next</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
