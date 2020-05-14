import React from "react";

// Check Icons
import CheckIcond from "../../assets/img/check.svg";

// Consumer
import { Consumer } from "../Context";

export default function Category() {
  const change = (index, category, setcategory) => {
    const newCategory = [...category];

    newCategory[0].status = false;
    newCategory[index].status = !newCategory[index].status;

    // Check if everything is turned off
    const allOff = newCategory.every((e) => e.status === false);

    // Check if everything is turned off excep of check index 0
    const exeptOne = newCategory
      .slice(1, newCategory.length)
      .every((e, index) => e.status === true);

    // Reset
    if (index === 0 || allOff || exeptOne) {
      setcategory(
        newCategory.map((e, index) => {
          index === 0 ? (e.status = true) : (e.status = false);
          return e;
        })
      );
      return;
    }

    setcategory(newCategory);
  };

  return (
    <Consumer>
      {(value) => (
        <div className="options">
          {value.category.map((option, index) => (
            <div className="option" key={index}>
              <div
                className={`check ${option.status ? "checked" : ""}`}
                onClick={change.bind(
                  this,
                  index,
                  value.category,
                  value.setcategory
                )}
              >
                <img src={CheckIcond} alt={option.name} />
              </div>
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </Consumer>
  );
}
