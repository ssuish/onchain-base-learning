// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract SimpleBank {
    address payable public owner;
    mapping(address => uint) public balances;

    function setBalances(address _address, uint _amount) public {
        balances[_address] = _amount;
    }

    function getBalances(address _address) public view returns (uint) {
        return balances[_address];
    }

    function increaseBalance(uint _amount) public {
        balances[msg.sender] += _amount;
        console.log("New balance: ", balances[msg.sender]);
    }

    function decreaseBalance(uint _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        console.log("New balance: ", balances[msg.sender]);
    }
}
