// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Mortgage {
  address public borrower;

  mapping (string=>address) public mortgageToBorrower;
  mapping (address=>string) public borrowerToMortgage;

  constructor() public {
      borrower = msg.sender;
  }
  
  function addMortgage(string memory document) public {
    mortgageToBorrower[document] = msg.sender;
    borrowerToMortgage[msg.sender] = document;
  }
}