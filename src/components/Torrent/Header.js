import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../other/logo";

import SearchIcone from "../../assets/img/search.svg";

export default function Header(props) {
  const [query, setQuery] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(false);

  const submit = (quickSearch, form) => {
    form.preventDefault();

    if (query.length === 0) {
      setEmptyQuery(true);
      setTimeout(() => {
        setEmptyQuery(false);
      }, 3000);

      return;
    }

    quickSearch(query);
  };

  return (
    <React.Fragment>
      <div className="header">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>

        <div className="container">
          <form onSubmit={submit.bind(this, props.quickSearch)}>
            <input
              type="text"
              placeholder="Search torrents..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              className={emptyQuery ? "empty-query" : ""}
            />
            <button>
              <span>PIRATE SEARCH</span>
              <img src={SearchIcone} alt="Search Icone" />{" "}
            </button>
          </form>

          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}
