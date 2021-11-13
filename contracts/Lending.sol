// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import "./SafeMath.sol";

contract Lending {
    using SafeMath for uint256;
    using SafeMath for uint256;

    enum ProposalState {
        ACCEPTED,
        ACCEPTING,
        WAITING
    }
    enum LoanState {
        REPAID,
        ACCEPTED,
        WAITING,
        PAID,
        FAILED
    }

    // borrower
    struct Proposal {
        uint256 proposalId;
        address borrower;
        uint256 amount;
        uint256 time;
        string mortgage;
        ProposalState state;
        bool sendMoney;
    }

    struct Loan {
        uint256 loanId;
        address lender;
        uint256 loanAmount;
        uint256 interestRate;
        uint256 proposalId; // not sure?
        uint256 time;
        LoanState state;
    }

    Proposal[] public proposals;
    Loan[] public potential_lenders;
    Loan[] public loans;

    mapping(uint256 => address) public proposalToBorrower;
    mapping(uint256 => address) public loanToLender;

    function createProposal(
        uint256 _loanAmount,
        uint256 _time,
        string memory _mortgage
    ) public {
        //change loanAmount to amount?
        uint256 _proposalId = proposals.length;
        proposals.push(
            Proposal(
                _proposalId,
                msg.sender,
                _loanAmount,
                _time,
                _mortgage,
                ProposalState.WAITING,
                false
            )
        );

        proposalToBorrower[_proposalId] = msg.sender;
    }

    function acceptProposal(
        uint256 _loanAmount,
        uint256 _interestRate,
        uint256 _proposalId
    ) public {
        uint256 _loanId = potential_lenders.length;
        potential_lenders.push(
            Loan(
                _loanId,
                msg.sender,
                _loanAmount,
                _interestRate,
                _proposalId,
                block.timestamp,
                LoanState.WAITING
            )
        );
        loanToLender[_loanId] = msg.sender;
        proposals[_proposalId].state = ProposalState.ACCEPTING;
    }

    function sendETHtoContract() public payable {
        //msg.value is the amount of wei that the msg.sender sent with this transaction.
        //If the transaction doesn't fail, then the contract now has this ETH.
    }

    function getAllPotentialLenders() public view returns (Loan[] memory) {
        return potential_lenders;
    }

    function getAllProposals() public view returns (Proposal[] memory) {
        return proposals;
    }

    function getAllLoans() public view returns (Loan[] memory) {
        return loans;
    }

    function acceptLender(uint256 _loanId, uint256 _proposalId) public {
        loans.push(
            Loan(
                _loanId,
                loanToLender[_loanId],
                potential_lenders[_loanId].loanAmount,
                potential_lenders[_loanId].interestRate,
                _proposalId,
                block.timestamp,
                LoanState.PAID
            )
        );

        proposals[_proposalId].state = ProposalState.ACCEPTED;

        potential_lenders[_loanId].state = LoanState.PAID;

        proposals[_proposalId].sendMoney = true;

        // (bool success, ) = msg.sender.call.value(
        //     potential_lenders[_loanId].loanAmount
        // )("");
        // require(success, "Transfer failed.");
    }

    // function repayAmount(uint256 _loanId) public view returns (uint256) {
    //     if (loans[_loanId].state == LoanState.ACCEPTED) {
    //         uint256 startTime = loans[_loanId].time;
    //         uint256 finalAmount = 0;
    //         uint256 principalValue = loans[_loanId].loanAmount;
    //         uint256 paymentTime = block.timestamp;
    //         uint256 interestRate = loans[_loanId].interestRate;
    //         uint256 loanTime = paymentTime - startTime;

    //         uint256 interest = (
    //             principalValue.mul(interestRate).mul(loanTime)
    //         ) / (365 * 24 * 60 * 60 * 100);

    //         finalAmount.add(interest);
    //         finalAmount.add(principalValue);

    //         return finalAmount;
    //     }
    // }

    function loanPaid(uint256 _loanId) public {
        potential_lenders[_loanId].state = LoanState.REPAID;
    }
}
