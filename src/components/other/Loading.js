import React from "react";

import LoadingIcone from "../../assets/img/loader.svg";

export default function Loading(props) {
  return (
    <React.Fragment>
      {props.show ? (
        <div className="loading">
          <img src={LoadingIcone} alt="Loading icon" className="loader" />
        </div>
      ) : null}
    </React.Fragment>
  );
}
