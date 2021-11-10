pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Lending {
    enum ProposalState {
        ACCEPTED,
        ACCEPTING,
        WAITING
    }
    enum LoanState {
        ACCEPTED,
        WAITING,
        PAID,
        FAILED
    }

    // borrower

    struct Proposal {
        address borrower;
        uint256 amount;
        uint256 time;
        bytes32 mortgage;
        ProposalState state;
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
        bytes32 _mortgage
    ) public {
        //change loanAmount to amount?
        proposals.push(
            Proposal(
                msg.sender,
                _loanAmount,
                _time,
                _mortgage,
                ProposalState.WAITING
            )
        );
        uint256 _proposalId = proposals.length - 1;
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
                0,
                LoanState.WAITING
            )
        );

        loanToLender[_loanId] = msg.sender;

        proposals[_proposalId].state = ProposalState.ACCEPTING;
    }

    function getAllPotentialLenders() public view returns (Loan[] memory) {
        return potential_lenders;
    }

    // function acceptLender(uint256 _loanId, uint256 _proposalId) public payable {
    //     loans.push(
    //         Loan(
    //             _loanId,
    //             loanToLender[_loanId],
    //             potential_lenders[_loanId].loanAmount,
    //             potential_lenders[_loanId].interestRate,
    //             _proposalId,
    //             block.timestamp,
    //             LoanState.PAID
    //         )
    //     );

    //     proposals[_proposalId].state = ProposalState.ACCEPTED;

    //     (bool success, ) = msg.sender.call{
    //         value: potential_lenders[_loanId].loanAmount
    //     }("");
    //     require(success, "Transfer failed.");
    // }
}
