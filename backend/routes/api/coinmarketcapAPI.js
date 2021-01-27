const express = require("express");
const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");
// import cats from "./mockData/cats.json";
const { dataStep1 } = require("./dataStep1.js");
//import dataStep1 from "./dataStep1.json";

const db = require("../../db/models");
const router = express.Router();

const { apiKeys } = require("../../config");

const { coinmarketcapKey } = apiKeys;

const seederAssetsArray = async () => {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD",
    {
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": coinmarketcapKey,
      },
    }
  );
  const data = await response.json();
  const dataStep1 = await data.data.map((ele) => {
    return {
      cmcId: ele.id,
      name: ele.name,
      symbol: ele.symbol,
      tags: ele.tags,
      quote: JSON.stringify(ele.quote),
    };
  });
  const dataStep2 = dataStep1.map(async (ele) => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ele.cmcId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": coinmarketcapKey,
        },
      }
    );
    const data = await response.json();
    const description = { description: data.data[ele.cmcId] };
    return Object.assign(ele, description);
  });

  return dataStep2;
};

//test
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD",
      {
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": coinmarketcapKey,
        },
      }
    );
    const data = await response.json();
    const data1 = await data.data.map((ele) => {
      return {
        cmcId: ele.id,
        name: ele.name,
        symbol: ele.symbol,
        tags: ele.tags,
        quote: ele.quote,
      };
    });

    res.json(data1);
  })
);

//super seederfile test
router.get(
  "/seeder",
  asyncHandler(async (req, res) => {
    const fivetyAssets = Object.assign({}, dataStep1);
    for (let i = 25; i < fivetyAssets.length; i++) {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${fivetyAssets[i].cmcId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CMC_PRO_API_KEY": coinmarketcapKey,
          },
        }
      );
      const data = await response.json();
      const assetDetails = {
        assetDetails: data.data[fivetyAssets[i].cmcId],
      };
      const ret = Object.assign(fivetyAssets[i], assetDetails);
      console.log(i, ret);
      fivetyAssets[i] = ret;
    }
    //console.log(Object.values(fivetyAssets));
    res.json(Object.values(fivetyAssets));
    //approach 1
    // const dataStep2 = await Promise.all(
    //   dataStep1.map(async (ele) => {
    //     const response = await fetch(
    //       `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ele.cmcId}`,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           "X-CMC_PRO_API_KEY": coinmarketcapKey,
    //         },
    //       }
    //     );
    //     const data = await response.json();
    //     const assetDetails = await {
    //       assetDetails: data.data[ele.cmcId],
    //     };

    //     const ret = await Object.assign(ele, assetDetails);

    //     return ret;
    //   })
    // );

    //approach 2
    // const dataStep2 = [];
    // for (let i = 0; i < dataStep1.length; i++) {
    //   const response = await fetch(
    //     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${dataStep1[i].cmcId}`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "X-CMC_PRO_API_KEY": coinmarketcapKey,
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   const assetDetails = await {
    //     assetDetails: data.data[dataStep1[i].cmcId],
    //   };

    //   const ret = await Object.assign(dataStep1[i], assetDetails);
    //   dataStep2.push(ret);
    // }
    // await dataStep1.forEach(async (ele) => {
    //   const response = await fetch(
    //     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ele.cmcId}`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "X-CMC_PRO_API_KEY": coinmarketcapKey,
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   const assetDetails = await {
    //     assetDetails: data.data[ele.cmcId],
    //   };

    //   const ret = await Object.assign(ele, assetDetails);
    //   await dataStep2.push(ret);
    // });
  })
);

module.exports = router;

// const dataStep2 = dataStep1.map(async (ele) => {
//   const response = await fetch(
//     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ele.cmcId}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "X-CMC_PRO_API_KEY": coinmarketcapKey,
//       },
//     }
//   );
//   const data = await response.json();
//   const description = { description: data.data[ele.cmcId] };
//   return Object.assign(ele, description);
// });
