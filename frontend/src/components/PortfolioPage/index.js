import PortfolioTable from "./PortfolioTable";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPortfolio } from "../../store/portfolio";
import BarChart from "./BarChart";
import PortfolioPieChart from "../PortfolioPieChart";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const portfolio = useSelector((state) => state.portfolio);
  const portfoliometa = useSelector((state) => state.loading.portfoliometa);
  const assets = useSelector((state) => state.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolio(sessionUser));
  }, [dispatch, sessionUser]);

  let tempTotal = 0;
  for (let key in portfolio) {
    if (key !== "meta") {
      const currentPrice = assets[key].quote.USD.price;
      const amount = portfolio[key].quantityOfAsset;
      tempTotal += currentPrice * amount;
    }
  }

  return (
    <>
      <h5>Total Portfolio Worth in USD: {tempTotal.toFixed(2)}</h5>
      <h5>Total Liquid Cash USD:{portfoliometa.cashUSD.toFixed(2)}</h5>
      <div className="charts_container">
        <div className="chart_pie">
          <PortfolioPieChart height={60} width={60} />
        </div>
        <div className="chart_bar">
          <BarChart height={110} width={60} />
        </div>
      </div>
      <PortfolioTable />
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPortfolio } from "../../store/portfolio";

// export default function PortfolioDisplay() {
//   const sessionUser = useSelector((state) => state.session.user);
//   const portfolio = useSelector((state) => state.portfolio);
//   const assets = useSelector((state) => state.assets);
//   const dispatch = useDispatch();
//   const [totalWorth, setTotalWorth] = useState(0);

//   useEffect(() => {
//     dispatch(getPortfolio(sessionUser));
//   }, []);

//   let tempTotal = 0;
//   for (let key in portfolio) {
//     if (key !== "meta") {
//       const currentPrice = assets[key].quote.USD.price;
//       const amount = portfolio[key].quantityOfAsset;
//       tempTotal += currentPrice * amount;
//     }
//   }

//   return <h5>Total Portfolio Worth: {tempTotal}</h5>;
// }
