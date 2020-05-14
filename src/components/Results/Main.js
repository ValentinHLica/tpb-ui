import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

import { Context } from "../Context";

import Results from "./Results";

import Loading from "../other/Loading";

import Header from "./Header";

export default function Main(props) {
  const { data, query, searchTorrents, setSearchQuery } = React.useContext(
    Context
  );
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const { searchQuery, category, sort } = props.match.params;

  const fetchData = async (searchQuery, category, sort) => {
    if (!props.match.params.searchQuery) {
      return props.history.push("/pagenotfound");
    }

    setLoading(true);
    setErr(false);
    const url = window.api_url;
    searchTorrents([]);

    props.history.replace(`/results/${searchQuery}/${category}/${sort}`);

    await axios
      .get(`${url}search/${searchQuery}?category=${category}&sort=${sort}`)
      .then((data) => {
        searchTorrents(data.data.data);
      })
      .catch((error) => {
        setErr(true);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData(searchQuery, category, sort);
    }

    setSearchQuery(searchQuery);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="search-page">
      <Header
        value={query}
        setSearchQuery={setSearchQuery}
        fetchData={fetchData}
        category={category}
        sort={sort}
      />

      <div className="results-wrapper">
        <Loading show={loading} />
        {err ? <h1 className="nothing-found">Nothing was found</h1> : null}

        <Results data={data} />
      </div>
    </div>
  );
}
