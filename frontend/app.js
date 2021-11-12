App = {
  crypt: "",

  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.render();
    await App.loadLenders();
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
    App.account = (await web3.eth.getAccounts())[0];
    $("#acc").attr("placeholder", App.account);
  },

  loadContract: async () => {
    App.contract = new web3.eth.Contract(abi, address);
  },

  render: async () => {
    $("#submit").on('click', (e) => { e.preventDefault(); App.createProposal() });
  },

  createProposal: async () => {
    const time = new Date($(".date").val()).getTime() / 1000;
    const mortgage = $("#mortgage").val();
    const amount = $(".amount").val();
    const receipt = await App.contract.methods.createProposal(amount, time, mortgage).send({from: App.account});
  },

  loadLenders : async () => {
    const all_potential_lenders = await App.contract.methods.getAllPotentialLenders().call();
 
    all_potential_lenders.forEach(async lender => {
      const borrower = await App.contract.methods.proposalToBorrower(lender.proposalId).call();

      if(borrower == App.account){
        $(".table").append(`<tr>
        <td data-label="Lender Address">
          ${lender.lender}
        </td>
        <td data-label="Amount">${lender.loanAmount}</td>
        <td data-label="Interest">${lender.interestRate}</td>
        <td data-label="">
          <a href="#" class="btn btn__active">Get Loan</a>
        </td>
        <td data-label="">
          <a href="#" class="btn btn__active">Get Details</a>
        </td>
      </tr>`)
      }
    });

  }
}

$(document).ready(() => {

  App.load();

})

