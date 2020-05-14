import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <h1 className="pagenotfound">
      Sorry Page not Found{" "}
      <Link to="/" className="go-back">
        Go Back
      </Link>
    </h1>
  );
}
