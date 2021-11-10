pragma solidity >=0.4.22 <0.9.0;

contract Lending {

    // borrower

    struct Proposal {
        address borrower;
        uint256 amount;
        uint256 time;
        bytes32 mortgage;
    }

    Proposal[] public proposals;

    mapping(uint256 => address) public proposalToBorrower;

    function createProposal(uint256 _loanAmount, uint256 _time, bytes32 _mortgage) public {
        proposals.push(Proposal(msg.sender, _loanAmount, _time, _mortgage));
        uint256 _proposalId = proposals.length - 1;
        proposalToBorrower[_proposalId] = msg.sender;
    }

}
