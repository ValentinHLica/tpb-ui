import React, { useState } from "react";

import Logo from "../other/logo";

import { Link } from "react-router-dom";

import SearchIcone from "../../assets/img/search.svg";

export default function Header(props) {
  const [emptyQuery, setemptyQuery] = useState(false);

  const submit = async (query, form) => {
    form.preventDefault();

    if (query.length === 0) {
      setemptyQuery(true);
      setTimeout(() => {
        setemptyQuery(false);
      }, 3000);

      return;
    }

    props.fetchData(query, props.category, props.sort);
  };

  return (
    <React.Fragment>
      <div className="header">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>

        <div className="container">
          <form onSubmit={submit.bind(this, props.value)}>
            <input
              type="text"
              placeholder="Search torrents..."
              onChange={(e) => {
                props.setSearchQuery(e.target.value);
              }}
              value={props.value}
              className={emptyQuery ? "empty-query" : ""}
            />
            <button>
              <span>PIRATE SEARCH</span>
              <img src={SearchIcone} alt="Search Icone" />{" "}
            </button>
          </form>

          <div className="header-wrapper"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
