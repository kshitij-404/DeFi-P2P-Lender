App = {
  crypt: "",

  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.render();
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
    App.account = (await web3.eth.getAccounts)[1];
  },

  loadContract: async () => {
    App.contract = new web3.eth.Contract(abi, address);
  },

  render: async () => {
    $("#submit").on('click', () => { App.createProposal() });
  },

  createProposal: async () => {
    const time = new Date($(".date").val()).getTime() / 1000;
    const mortgage = App.crypt;
    const amount = $(".amount").val();

    const receipt = await App.contract.methods.createProposal(amount, time, mortgage).send({from: App.account});
    console.log(receipt);
  },

  fileChange : async (event) => {
    var file = event.target.files[0];
  
    const fileReader = new FileReader();
    
    fileReader.addEventListener('loadend', (evt) => {
    
      if (evt.target.readyState == FileReader.DONE) {
        const hash = CryptoJS.SHA256(fileReader.result);
        App.crypt = hash.toString();
      }
      
    });
    fileReader.readAsDataURL(file);
  }
}

$(document).ready(() => {

  App.load();

})

