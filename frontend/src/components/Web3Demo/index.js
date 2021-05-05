import React, { useEffect, useState } from "react";
import Web3DemoABI from "./Web3Demo.json";
import Web3 from "web3";

import "./Web3Demo.css";
const Web3DemoContractAddress = "0xb7D8cba348ef05cF4B888f7976A4FE7744fa3dc0";
export default function Web3Demo() {
  const [walletAmount, setWalletAmount] = useState(0);
  const [newWord, setNewWord] = useState("Enter");
  const [currentWord, setCurrentWord] = useState("");

  async function getWalletAmount() {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        return true;
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        return true;
      } else {
        return false;
      }
    }

    let wallet = await loadWeb3();

    if (wallet) {
      const web3 = window.web3;

      const accounts = await window.web3.eth.getAccounts();
      const address = { account: accounts[0] }.account;
      if (address) {
        web3.eth.getBalance(address, function (error, wei) {
          if (!error) {
            let balance = web3.utils.fromWei(wei, "ether");
            console.log(balance);
            setWalletAmount(balance.substring(0, 4));
          }
        });
      }
    } else {
      return <h1>Get metamask, newb!</h1>;
    }
  }
  async function postStringToSmartContract() {
    const web3 = window.web3;
    const ETHAccounts = await web3.eth.getAccounts();
    const DemoContract = new web3.eth.Contract(
      Web3DemoABI.abi,
      Web3DemoContractAddress
    );

    await DemoContract.methods
      .Change_Word(currentWord)
      .send({ from: ETHAccounts[0], value: 0 })
      .once("receipt", (receipt) => {
        console.log(receipt);
        console.log("transaction hash" + receipt.transactionHash);
      });
  }
  async function Read_Word() {
    const web3 = window.web3;
    const HelloContract = new web3.eth.Contract(
      Web3DemoABI.abi,
      Web3DemoContractAddress
    );

    await HelloContract.methods.read_word().call(function (error, result) {
      console.log(result);
      setNewWord(result);
    });
  }

  useEffect(() => {
    getWalletAmount();
  }, []);
  return (
    <>
      {walletAmount !== 0 && (
        <>
          <h2>Web3 Blockchain/ETH Smart Contract Demo</h2>
          <div className="instructions">
            <h5>1. Switch to Ropsten Test Net</h5>
            <h5>
              2. Use either of these faucets to request some test ETHs this{" "}
              <a href="https://faucet.ropsten.be/">faucet</a> or{" "}
              <a href="https://faucet.metamask.io/">faucet</a>
            </h5>
            <h5>
              3. Enter a string that will live forever on the blockchain, then
              click "Post to SmartContract"
            </h5>
            <h5>
              4. Confirm transaction, look under metamask's "Activity" and see
              this broadcast on Etherscan
            </h5>
            <h5>5. After about 10 seconds, click "Read Smart Contract".</h5>
            <h5>
              6. If a miner has confirmed transaction, the word you've entered
              should get exported from the smartcontract via a function I've
              created and then displayed on this page
            </h5>
          </div>
          <h2>Total Amount: {walletAmount} ETH</h2>
          <h2>Enter Word:</h2>
          <textarea
            class="web3textarea"
            type="text"
            value={currentWord}
            onChange={(e) => setCurrentWord(e.target.value)}
          ></textarea>

          <button onClick={() => postStringToSmartContract()}>
            Post to SmartContract
          </button>
          <button onClick={() => Read_Word()}>Read SmartContract</button>

          <h2>Current Word:</h2>
          <p>{newWord}</p>
        </>
      )}
      {walletAmount === 0 && (
        <>
          <h2>
            Get metamask now, go to{" "}
            <a href="https://faucet.ropsten.be/">this faucet </a>
            or
            <a href="https://faucet.metamask.io/"> this faucet </a>
            to get your testnet ETH please and join the blockchain revolution
          </h2>
        </>
      )}
    </>
  );
}
