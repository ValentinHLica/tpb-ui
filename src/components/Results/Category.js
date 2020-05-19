import React from "react";
import { Context } from "../Context";

export default function Category(props) {
  const { category } = React.useContext(Context);

  const changeCateogry = (cat) => {
    props.fetchData(props.searchQuery, cat, 7);
  };

  return (
    <div className="change-category">
      <div className="number-results">
        <p>Displaying</p>
        <strong>{props.pagination}</strong>
        <p>related torrents for</p>
        <strong>"{props.searchQuery}"</strong>
      </div>
      <ul>
        {category.map((cat, index) => (
          <li
            key={index}
            className={
              props.category.split(",").includes(cat.code)
                ? "current-category"
                : ""
            }
            onClick={changeCateogry.bind(this, cat.code)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
