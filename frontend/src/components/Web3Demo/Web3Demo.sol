pragma solidity >=0.4.22 <0.8.0;

contract Web3Demo {
    string public web3word = "web3word";

    event WordChanged(string newWord);

    function Change_Word(string memory newWord) public {
        web3word= newWord;
        emit WordChanged(newWord);
    }
    function read_word() public view returns (string memory) {
        return web3word;
    }
}