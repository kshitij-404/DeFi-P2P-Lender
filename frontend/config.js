// const address = "0xEDEb41e81a0a28d1fa0Ff1787fd273A41f575fdc";
// const address_2 = "0xc0D808dc1C81dBdC641bd8c57066F87fE74FFce5";

// const abi =[
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "loanToLender",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "loans",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "loanId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "lender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "loanAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "interestRate",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "proposalId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "time",
//         "type": "uint256"
//       },
//       {
//         "internalType": "enum Lending.LoanState",
//         "name": "state",
//         "type": "uint8"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "potential_lenders",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "loanId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "lender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "loanAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "interestRate",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "proposalId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "time",
//         "type": "uint256"
//       },
//       {
//         "internalType": "enum Lending.LoanState",
//         "name": "state",
//         "type": "uint8"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "proposalToBorrower",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "proposals",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "proposalId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "borrower",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "time",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string",
//         "name": "mortgage",
//         "type": "string"
//       },
//       {
//         "internalType": "enum Lending.ProposalState",
//         "name": "state",
//         "type": "uint8"
//       },
//       {
//         "internalType": "bool",
//         "name": "sendMoney",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_loanAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_time",
//         "type": "uint256"
//       },
//       {
//         "internalType": "string",
//         "name": "_mortgage",
//         "type": "string"
//       }
//     ],
//     "name": "createProposal",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_loanAmount",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_interestRate",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_proposalId",
//         "type": "uint256"
//       }
//     ],
//     "name": "acceptProposal",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "sendETHtoContract",
//     "outputs": [],
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "getAllPotentialLenders",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "loanId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "address",
//             "name": "lender",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "loanAmount",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "interestRate",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "proposalId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "time",
//             "type": "uint256"
//           },
//           {
//             "internalType": "enum Lending.LoanState",
//             "name": "state",
//             "type": "uint8"
//           }
//         ],
//         "internalType": "struct Lending.Loan[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "getAllProposals",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "proposalId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "address",
//             "name": "borrower",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "amount",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "time",
//             "type": "uint256"
//           },
//           {
//             "internalType": "string",
//             "name": "mortgage",
//             "type": "string"
//           },
//           {
//             "internalType": "enum Lending.ProposalState",
//             "name": "state",
//             "type": "uint8"
//           },
//           {
//             "internalType": "bool",
//             "name": "sendMoney",
//             "type": "bool"
//           }
//         ],
//         "internalType": "struct Lending.Proposal[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "getAllLoans",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "loanId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "address",
//             "name": "lender",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "loanAmount",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "interestRate",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "proposalId",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "time",
//             "type": "uint256"
//           },
//           {
//             "internalType": "enum Lending.LoanState",
//             "name": "state",
//             "type": "uint8"
//           }
//         ],
//         "internalType": "struct Lending.Loan[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_loanId",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_proposalId",
//         "type": "uint256"
//       }
//     ],
//     "name": "acceptLender",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_loanId",
//         "type": "uint256"
//       }
//     ],
//     "name": "loanPaid",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_loanId",
//         "type": "uint256"
//       }
//     ],
//     "name": "getLoanState",
//     "outputs": [
//       {
//         "internalType": "enum Lending.LoanState",
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];

// const abi_2 = [
//   {
//     "inputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "borrower",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "borrowerToMortgage",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "name": "mortgageToBorrower",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "document",
//         "type": "string"
//       }
//     ],
//     "name": "addMortgage",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];

const address = "0x8F2612742f2b8768362C7E3894Bc1617494f3Ed4";
const address_2 = "0xc0D808dc1C81dBdC641bd8c57066F87fE74FFce5";

const abi =[
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "loanToLender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "loans",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interestRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "internalType": "enum Lending.LoanState",
        "name": "state",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "potential_lenders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "loanId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interestRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "internalType": "enum Lending.LoanState",
        "name": "state",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposalToBorrower",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "proposalId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "mortgage",
        "type": "string"
      },
      {
        "internalType": "enum Lending.ProposalState",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "sendMoney",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_mortgage",
        "type": "string"
      }
    ],
    "name": "createProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_interestRate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      }
    ],
    "name": "acceptProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "sendETHtoContract",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllPotentialLenders",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "loanAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "interestRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "enum Lending.LoanState",
            "name": "state",
            "type": "uint8"
          }
        ],
        "internalType": "struct Lending.Loan[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllProposals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "mortgage",
            "type": "string"
          },
          {
            "internalType": "enum Lending.ProposalState",
            "name": "state",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "sendMoney",
            "type": "bool"
          }
        ],
        "internalType": "struct Lending.Proposal[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllLoans",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "loanId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "lender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "loanAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "interestRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "enum Lending.LoanState",
            "name": "state",
            "type": "uint8"
          }
        ],
        "internalType": "struct Lending.Loan[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_proposalId",
        "type": "uint256"
      }
    ],
    "name": "acceptLender",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_loanId",
        "type": "uint256"
      }
    ],
    "name": "loanPaid",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const abi_2 = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "borrower",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "borrowerToMortgage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "mortgageToBorrower",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "document",
        "type": "string"
      }
    ],
    "name": "addMortgage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
