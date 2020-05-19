import React from "react";
import NextIcone from "../../assets/img/arrow-right.svg";

export default function Pagination(props) {
  const changePage = (page) => {
    props.fetchData(props.query, props.category, 7, page);
  };

  return (
    <div className="pagination">
      <ul>
        {props.currentPage <= 3 ? (
          <React.Fragment>
            <li
              className={props.currentPage === 1 ? "current-page" : ""}
              onClick={changePage.bind(this, 1)}
            >
              1
            </li>

            {props.totalPages >= 2 ? (
              <li
                className={props.currentPage === 2 ? "current-page" : ""}
                onClick={changePage.bind(this, 2)}
              >
                2
              </li>
            ) : null}

            {props.totalPages >= 3 ? (
              <li
                className={props.currentPage === 3 ? "current-page" : ""}
                onClick={changePage.bind(this, 3)}
              >
                3
              </li>
            ) : null}
          </React.Fragment>
        ) : null}

        {props.currentPage > 3 ? (
          <React.Fragment>
            <li onClick={changePage.bind(this, 1)}>1</li>
            <li className="more">...</li>
            <li onClick={changePage.bind(this, props.currentPage - 1)}>
              {props.currentPage - 1}
            </li>
            <li
              className="current-page"
              onClick={changePage.bind(this, props.currentPage)}
            >
              {props.currentPage}
            </li>

            {props.currentPage + 1 < props.totalPages ? (
              <li onClick={changePage.bind(this, props.currentPage + 1)}>
                {props.currentPage + 1}
              </li>
            ) : null}
          </React.Fragment>
        ) : null}

        {props.currentPage + 1 <= props.totalPages ? (
          <li onClick={changePage.bind(this, props.currentPage + 1)}>
            <img src={NextIcone} alt="Next Page Icone" />{" "}
          </li>
        ) : null}
      </ul>
    </div>
  );
}
