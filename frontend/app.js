App = {
    load: async() => {
        await App.loadWeb3();
        await App.loadAccount();
        await App.loadContract();
    },

    loadWeb3: async() => {
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
      console.log(App.account);
    },

    loadContract: async () => {
      App.contract = new web3.eth.Contract(abi, address);
    },

    createProposal: async () => {
      const loanAmount = document.getElementById("loanAmount").value;
      const date = document.getElementById("date").value;
      const values = date.split("-");
      var datum = new Date(Date.UTC(values[0],values[1],values[2]));
      const dueDate = (datum.getTime()/1000);
      const currentDate = Math.round(new Date().getTime()/1000);
      const time = dueDate - currentDate;
      
      const file = document.getElementById("mortgage").value;
      const mortgage = "0x6162636400000000000000000000000000000000000000000000000000000000";

      const receipt = await App.contract.methods.createProposal(loanAmount, time, mortgage).send({from: App.account});
      console.log(receipt);

      console.log(file);
      
    },

}

$(document).ready(() => {
    App.load()
})

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  App.createProposal();
})

