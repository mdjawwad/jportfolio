import React from "react";
import Tittle from "../component/Tittle";
import portfolios from "../component/AllPortfolio";
import MuneItmes from "../component/MuneItmes";
import Categories from "../component/Categories";
import { useState } from "react";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];
function Portfolios() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMuneItmes] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMuneItmes(portfolios);
      return;
    }
    const fliterData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMuneItmes(fliterData);
  };

  return (
    <div>

    <div className="Portfolios">
      <div className="title">
        <Tittle title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="main-portfolios">
        <Categories filter={filter} categories={categories} />
        <MuneItmes menuItem={menuItems} />
      </div>
    </div>
    </div>
  );
}

export default Portfolios;
