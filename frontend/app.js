App = {
  crypt: "",

  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
<<<<<<< HEAD
    // await App.loadIPFS();
=======
>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
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
<<<<<<< HEAD
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
    }
=======
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
    }
>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
    // Non-dapp browsers...
    else {
      console.log(
        'Non-Ethereum browser detected. You should consider trying MetaMask!',
      )
    }
  },  
  loadAccount: async () => {
<<<<<<< HEAD
    App.account = (await web3.eth.getAccounts())[0];
=======
    App.account = (await web3.eth.getAccounts)[1];
>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
  },

  loadContract: async () => {
    App.contract = new web3.eth.Contract(abi, address);
  },
<<<<<<< HEAD

  // loadIPFS: async () => {
  //   node = await IPFS.create();
  //   const version = await node.version();
  //   console.log("IPFS Node Version:", version.version);
  // },

  render: async () => {
    $("#submit").on('click', (e) => { 
      e.preventDefault();
      App.createProposal() });
  },

  createProposal: async () => {
    const time = new Date($(".date").val()).getTime() / 1000;
    const mortgage = "0x6162636400000000000000000000000000000000000000000000000000000000";
    const amount = $(".amount").val();

    console.log(amount);

=======

  render: async () => {
    $("#submit").on('click', () => { App.createProposal() });
  },

  createProposal: async () => {
    const time = new Date($(".date").val()).getTime() / 1000;
    const mortgage = App.crypt;
    const amount = $(".amount").val();

>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
    const receipt = await App.contract.methods.createProposal(amount, time, mortgage).send({from: App.account});
    console.log(receipt);
  },

<<<<<<< HEAD
  // readCurrentUserFile: async () => {
  //   const result = await ipfsContract.userFiles(
  //     defaultProvider.getSigner().getAddress()
  //   );
  
  //   return result;
  // },

  // setFile: async (hash) => {
  //   const ipfsWithSigner = ipfsContract.connect(defaultProvider.getSigner());
  //   await ipfsWithSigner.setFile(hash);
  //   setIpfsHash(hash);
  // },

  // uploadFile: async (file) => {
  //   const files = [{ path: file.name + file.path, content: file }];

  //   for await (const result of node.add(files)) {
  //       await setFile(result.cid.string);
  //   }
// },

=======
>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
  fileChange : async (event) => {
    var file = event.target.files[0];
  
    const fileReader = new FileReader();
    
    fileReader.addEventListener('loadend', (evt) => {
    
      if (evt.target.readyState == FileReader.DONE) {
        const hash = CryptoJS.SHA256(fileReader.result);
        App.crypt = hash.toString();
<<<<<<< HEAD
        console.log(hash);
=======
>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
      }
      
    });
    fileReader.readAsDataURL(file);
  }
}

$(document).ready(() => {
<<<<<<< HEAD
    App.load();

})
=======

  App.load();

})

>>>>>>> 9295e2ec525ff2f9b221184109374a8e1669e388
