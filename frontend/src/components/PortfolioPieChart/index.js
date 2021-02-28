import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

// const exampledata = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
const backgroundColors = [
  "rgba(119, 212, 137, 0.2)",
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(171, 183, 201, 0.2)",
  "rgba(178, 201, 171, 0.2)",
  "rgba(224, 129, 105, 0.2)",
  "rgba(172, 160, 219, 0.2)",
];
const borderColors = [
  "rgba(119, 212, 137, 0.2)",
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(171, 183, 201, 1)",
  "rgba(178, 201, 171, 1)",
  "rgba(224, 129, 105, 1)",
  "rgba(172, 160, 219, 1)",
];

export default function PortfolioPieChart({ height, width }) {
  const portfolio = useSelector((state) => state.portfolio);
  const assets = useSelector((state) => state.assets);

  const labels = Object.values(portfolio).map((asset) => {
    return assets[asset.id].symbol;
  });
  const assetsUSDPriceArr = Object.values(portfolio).map((asset) => {
    const currentPrice = assets[asset.id].quote.USD.price;
    const amount = asset.quantityOfAsset;
    const ret = (currentPrice * amount).toFixed(0);
    return ret;
  });
  const length = labels.length;
  const backgroundColor = backgroundColors.slice(0, length);
  const borderColor = borderColors.slice(0, length);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount owned in USD",
        data: assetsUSDPriceArr,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Pie
        data={data}
        width={width}
        height={height}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );
}
