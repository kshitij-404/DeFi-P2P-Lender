const ProposalState = {
	0 : "ACCEPTED",
    1 : "ACCEPTING",
    2 : "WAITING"
}

App = {
    crypt: "",
  
    load: async () => {
      await App.loadWeb3();
      await App.loadAccount();
      await App.loadContract();
      await App.loadProposals();
    },
  
    loadWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert('Please connect to Metamask.')
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
      }
      // Non-dapp browsers...
      else {
        console.log(
          'Non-Ethereum browser detected. You should consider trying MetaMask!',
        )
      }
    },  
    loadAccount: async () => {
      App.account = (await web3.eth.getAccounts())[1];
    },
  
    loadContract: async () => {
      App.contract = new web3.eth.Contract(abi, address);
    },
    
  
  
    loadProposals: async () => {
        const proposals = await App.contract.methods.getAllProposals().call();
        const table = document.getElementsByClassName("table");
        

        proposals.forEach(proposal => {
            var date = new Date(proposal.time * 1000);

            var dueDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

            $(".table").append(` <tr>
            <td data-label="Borrower Address">
              ${proposal.borrower}
            </td>
            <td data-label="Amount">${proposal.amount}</td>
            <td data-label="Due Date">${dueDate}</td>
            <td data-label="">
              <a href="./giveLoan.html" class="btn btn__active">Give Loan</a>
            </td>
            <td data-label="Status">${ProposalState[proposal.state]}</td>
          </tr>`)
        })
    }
  
 
  
  }

$(document).ready(() => {
    App.load()
})