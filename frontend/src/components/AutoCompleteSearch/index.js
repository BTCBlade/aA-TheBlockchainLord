import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./AutoCompleteSearch.css";

function AutoComplete({ setAssetDetailsData }) {
  const [inputVal, setInputVal] = useState("");
  const assets = useSelector((state) => state.assets);
  const names = [];
  for (let key in assets) {
    names.push([key, assets[key].name + " " + assets[key].symbol]);
  }

  const a = (e) => {
    setInputVal(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log(e);
    }
  };

  const selectName = (e) => {
    const name = e.target.innerText;
    setInputVal(name);
    if (e.target.attributes.rank) {
      const rank = e.target.attributes.rank.nodeValue;
      const asset = assets[rank];
      const assetDetailsObj = { rank: asset.id };
      setAssetDetailsData(assetDetailsObj);
    }
    setInputVal("");
  };

  const matches = () => {
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return [];

    names.forEach((name) => {
      //   const nameSegment = name.slice(0, inputLength);
      //   if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
      //     matches.push(name);
      //   }
      if (name[1].toLowerCase().includes(inputVal.toLowerCase())) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push("No matches");

    return matches;
  };
  const results = matches().map((result) => (
    <CSSTransition
      key={result[1]}
      rank={result[0]}
      classNames="result"
      timeout={{ enter: 500, exit: 300 }}
    >
      <li>{result[1]}</li>
    </CSSTransition>
  ));

  return (
    <section>
      <div className="auto">
        <input
          onChange={a}
          onKeyPress={handleEnter}
          value={inputVal}
          placeholder="Search..."
        />
        <ul className="auto-dropdown" onClick={selectName}>
          <TransitionGroup>{results}</TransitionGroup>
        </ul>
      </div>
    </section>
  );
}

export default AutoComplete;
