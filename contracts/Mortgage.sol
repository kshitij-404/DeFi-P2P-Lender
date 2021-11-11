// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Mortgage {
  address public borrower;

  mapping (bytes32=>address) public mortgageToBorrower;
  mapping (address=>bytes32[]) public borrowerToMortgage;

  constructor() public {
      borrower = msg.sender;
  }
  
  function addMortgage(bytes32 document) public {

    mortgageToBorrower[document] = msg.sender;

    uint count = borrowerToMortgage[msg.sender].length;

    uint i;
    for(i=0;i<count; i++)
    {
      if(borrowerToMortgage[msg.sender][i] == document)
        return;
    }
    borrowerToMortgage[msg.sender].push(document);
  }

  function getCountMortgage(address person) public view returns(uint) {
    return borrowerToMortgage[person].length;
  }
}
