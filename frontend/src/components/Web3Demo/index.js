import React, { useEffect, useState } from "react";
import Web3DemoABI from "./Web3Demo.json";
import styled from "styled-components";
import Web3 from "web3";

export const MoblieButton = styled.div`
  margin-top: 25px;

  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 20px;
  text-align: center;
  width: 15%;
  height: 20px;
  border-radius: 10px;
  border: 2px #6685ff solid;
  font-family: sans-serif;
  color: #0a3cff;
  background-color: #a8baff;
  box-shadow: 1px 2px;
`;

export const TextArea = styled.input`
  margin-bottom: 0px;
  font-size: 22px;
  width: 47%;
  text-align: center;

  border-radius: 42px;
  border: 2px #6685ff solid;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  :focus {
    outline: 0;
    box-shadow: 0 0 10px blue;
  }
`;

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
    console.log(wallet);

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
    const Ethaccounts = await web3.eth.getAccounts();
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
      {walletAmount && (
        <>
          <h2>
            Web3 Blockchain/ETH Smart Contract Demo{" "}
            <a href="https://github.com/Klongrich/HelloWorld_Dapp_Example">
              Special thanks to Klongrich's github
            </a>
          </h2>
          <h2>Total Amount: {walletAmount} ETH</h2>
          <h2>Enter Word:</h2>
          <TextArea
            type="text"
            value={currentWord}
            onChange={(e) => setCurrentWord(e.target.value)}
          />

          <MoblieButton onClick={() => postStringToSmartContract()}>
            Send New Info
          </MoblieButton>
          <MoblieButton onClick={() => Read_Word()}>
            Read Current Word
          </MoblieButton>

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
