App = {
  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.submitbtn();
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
    App.account = (await web3.eth.getAccounts())[0];
    $(".acc").attr("placeholder", App.account);
  },

  loadContract: async () => {
    App.contract = new web3.eth.Contract(abi, address);
  },

  giveLoan: async () => {
    let searchParams = new URLSearchParams(window.location.search);
    let param = searchParams.get("borrower");

    const amount = $("#loanAmnt").val();
    const interest = $("#intrst").val();
    const proposalID = param;

    const acceptedProposal = await App.contract.methods
      .acceptProposal(amount, interest, proposalID)
      .send({ from: App.account });
  },

  submitbtn: async () => {
    $("#submit").on("click", (e) => {
      e.preventDefault();
      App.giveLoan();
    });
  },
};

$(document).ready(() => {
  App.load();
});
