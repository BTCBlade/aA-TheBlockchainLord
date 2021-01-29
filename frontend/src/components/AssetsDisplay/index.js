import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllAssets } from "../../store/assets";

export default function AssetsDisplay() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  return (
    <>
      <table>
        {Object.values(assets).map((asset) => {
          <tr>{asset.symbol}</tr>
          <tr>{asset.quote.USD.price}</tr>
        })}
      </table>

    </>
  );
}
