// const LoanState = {
//   0: "REPAID",
//   1: "ACCEPTED",
//   2: "WAITING",
//   3: "PAID",
//   4: "FAILED",
// };

App = {
    crypt: "",
  
    load: async () => {
      await App.loadWeb3();
      await App.loadAccount();
      await App.loadContract();
      await App.loadLoans();
    },
  
    loadWeb3: async () => {
      if (typeof web3 !== "undefined") {
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
      } else {
        window.alert("Please connect to Metamask.");
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          // Request account access if needed
          await ethereum.enable();
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider;
        window.web3 = new Web3(web3.currentProvider);
      }
      // Non-dapp browsers...
      else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    },
    loadAccount: async () => {
      App.account = (await web3.eth.getAccounts())[1];
    },
  
    loadContract: async () => {
      App.contract = new web3.eth.Contract(abi, address);
    },
  
    loadLoans: async () => {
      const loans = await App.contract.methods.getAllPotentialLenders().call();
      const table = document.getElementsByClassName("table");
  
      loans.forEach((potential_lenders) => {
        var loanId = potential_lenders.loanId;
           
        $(".table").append( `<tr>
          <td data-label="Lender Address">
            ${potential_lenders.loanAmount}
          </td>
          <td data-label="Amount">${potential_lenders.loanAmount}</td>
          <td data-label="Interest">${potential_lenders.interestRate}</td>
          <td data-label="">
            <a href="#" class="btn btn__active">Get Loan</a>
          </td>
          <td data-label="">
            <a href="#" class="btn btn__active">Repay Loan</a>
          </td>
        </tr>`)
      });
    },
  };
  
  $(document).ready(() => {
    App.load();
  });
  