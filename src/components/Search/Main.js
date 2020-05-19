import React, { useState } from "react";
import axios from "axios";
import "./style.css";

import { Consumer } from "../Context";

// Logo
import Logo from "../other/logo";

// Category
import Category from "./Category";

// Loading
import Loading from "../other/Loading";

export default function Main(props) {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [emptyQuery, setemptyQuery] = useState(false);

  const submit = async (
    query,
    category,
    searchTorrents,
    setPagination,
    form
  ) => {
    form.preventDefault();

    if (query.length === 0) {
      setemptyQuery(true);
      setTimeout(() => {
        setemptyQuery(false);
      }, 3000);

      return;
    }

    const url = window.api_url;

    const categoryTranslate = [];
    category.forEach((cat) => {
      if (cat.status) {
        categoryTranslate.push(cat.code);
      }
    });

    setLoading(true);
    setErr(false);
    searchTorrents([]);

    await axios
      .get(`${url}search/${query}?category=${categoryTranslate.join(",")}`)
      .then((data) => {
        searchTorrents(data.data.data);

        setPagination([
          data.data.pagination.currentPage,
          data.data.pagination.lastPage,
        ]);

        setLoading(false);
        props.history.push(
          `/results/${query}/${categoryTranslate.join(",")}/7`
        );
      })
      .catch((error) => {
        setErr(true);
      });
  };

  return (
    <Consumer>
      {(value) => (
        <React.Fragment>
          <div className="wrapper">
            <div className="search">
              <div className="logo">
                <Logo />
              </div>
              <form
                className="search-form"
                onSubmit={submit.bind(
                  this,
                  value.query,
                  value.category,
                  value.searchTorrents,
                  value.setPagination
                )}
              >
                <input
                  type="text"
                  placeholder="Search torrents..."
                  onChange={(e) => {
                    value.setSearchQuery(e.target.value);
                  }}
                  value={value.query}
                  className={emptyQuery ? "empty-query" : ""}
                />
                {emptyQuery ? (
                  <p className="query-error">Please add a search query</p>
                ) : null}

                <button type="submit"></button>
              </form>
              <Category />
              <button
                className="search-button"
                onClick={submit.bind(
                  this,
                  value.query,
                  value.category,
                  value.searchTorrents,
                  value.setPagination
                )}
              >
                PIRATE SEARCH
              </button>
              <Loading show={loading} />
              {err ? (
                <h1 className="nothing-found">Nothing was found</h1>
              ) : null}
            </div>
          </div>
        </React.Fragment>
      )}
    </Consumer>
  );
}
