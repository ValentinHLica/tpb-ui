import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../other/logo";

import DropDownIcone from "../../assets/img/menu.svg";
import SearchIcone from "../../assets/img/search.svg";

export default function Header(props) {
  const [query, setQuery] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
    setDropdown(false);
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

          <div className="header-wrapper">
            <ul className="list">
              <li>Login</li>
              <li>Register</li>
            </ul>

            <div
              className="dropdown-button"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <img src={DropDownIcone} alt="DropDown Icone" />
            </div>
          </div>
        </div>
      </div>

      {dropdown ? (
        <div
          className="bc"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        ></div>
      ) : null}

      <ul className={`dropdown-menu ${dropdown ? "dropdown-menu-open" : ""}`}>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </React.Fragment>
  );
}
