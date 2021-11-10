pragma solidity >=0.4.22 <0.9.0;

contract Lending {

    // borrower

    struct Proposal {
        address borrower;
        uint256 amount;
        uint256 time;
        bytes32 mortgage;
    }

    struct Loan {
        address lender;
        uint256 loanAmount;
        uint256 interestRate;
        uint256 proposalId; // not sure?
    }

    Proposal[] public proposals;
    Loan[] public potential_lenders;

    mapping(uint256 => address) public proposalToBorrower;
    mapping(uint256 => address) public loanToLender; 

    function createProposal(uint256 _loanAmount, uint256 _time, bytes32 _mortgage) public { //change loanAmount to amount?
        proposals.push(Proposal(msg.sender, _loanAmount, _time, _mortgage)); 
        uint256 _proposalId = proposals.length - 1;
        proposalToBorrower[_proposalId] = msg.sender;
    }

    function acceptProposal(uint256 _loanAmount, uint256 _interestRate, uint256 _proposalId) public {
        potential_lenders.push(Loan(msg.sender, _loanAmount, _interestRate, _proposalId));
          uint256 _loanId = potential_lenders.length - 1;
          loanToLender[_loanId] = msg.sender;
    }

    function getAllPotentialLenders() public view returns(Loan[] memory) {
        return potential_lenders;
    }

}
