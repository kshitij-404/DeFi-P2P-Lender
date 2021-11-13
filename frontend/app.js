const LoanState = {
  0: "REPAID",
  1: "ACCEPTED",
  2: "WAITING",
  3: "PAID",
  4: "FAILED",
};

App = {
  crypt: "",

  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.loadLenders();
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
    await App.contract.methods.createProposal(amount, time, mortgage).send({from: App.account});
  },

  loadLenders : async () => {
    const all_potential_lenders = await App.contract.methods.getAllPotentialLenders().call();

    all_potential_lenders.forEach(async lender => {
      const borrower = await App.contract.methods.proposalToBorrower(lender.proposalId).call();

      let payB = 0;
      let repayB = 0;

      console.log("state" ,lender.state);

      // if(lender.state == '1'){
      //   payB = 1;
      // }
      // else if(lender.state == '3' || lender.state == '2'){
      //   repayB = 1;
      // }
      // else
      // {
      //   payB = 1;
      //   repayB = 1;
      // }

      if(lender.state == '3'){
        payB = 1;
      }
      else if(lender.state == '1' || lender.state == '2'){
        repayB = 1;
      }
      else
      {
        payB = 1;
        repayB = 1;
      }

      if(borrower == App.account){
        $(".table").append(`<tr>
        <td data-label="Lender Address">
          ${lender.lender}
        </td>
        <td data-label="Amount">${lender.loanAmount}</td> 
        <td data-label="Interest">${lender.interestRate}</td>
        <td data-label="">
        <a href="#"><button id=${lender.loanId} class="btn btn__active p" onClick=App.getLoan()>Get Loan</button></a>
        </td>
        <td data-label="">
        <a href="#"><button id=${lender.loanId} onClick= App.repay(${lender.loanId}) class="btn btn__active r")>Repay</button></a>
        </td>
        <td data-label="Status">${LoanState[lender.state]}</td>
        </tr>
       `)
      }

      if(payB==1)
      {
        $(".p").attr("disabled", true);
      }
      if(repayB==1)
      {
        $(".r").attr("disabled", true);
      }
    });
  },

  getLoan: async () => {

    console.log("loan");

    const loans = await App.contract.methods.getAllPotentialLenders().call();

    loans.forEach(async (loan) => {
      const lender = loan.lender;
      const loanAmount = loan.loanAmount;
 

      console.log(loanAmount);

          const receipt = await App.contract.methods.acceptLender(loan.loanId, loan.proposalId).send({from: App.account});
          console.log(receipt);
          const ab = await App.contract.methods.getAllLoans().call();
          console.log(ab);
        });
    },

  // getLoan : async (id) => {
  //   let o;
  //   const all_potential_lenders = await App.contract.methods.getAllPotentialLenders().call();
  //   all_potential_lenders.forEach(async lender => {
  //     if(lender.loanId == id){ 
  //       o = lender.proposalId;

  //       let a= await App.contract.methods.acceptLender(id,Number(o)).send({from: App.account});
  // console.log(a);
  //  const ab = await App.contract.methods.getAllLoans().call();
  //  console.log(ab);
  //     }})
     
  
  //   },

    repay : async (id) => {
      const all_potential_lenders = await App.contract.methods.getAllPotentialLenders().call();
      all_potential_lenders.forEach(async lender => {
        if(lender.loanId == id){ 
        await App.contract.methods.loanPaid(lender.loanId).send({from : App.account});
  
         let final = 0;
         const time = Date.now() - lender.time;
         const rate = lender.interestRate;
         const principal = lender.loanAmount;
         console.log(time);
         console.log(lender.time);
         final = (principal*rate*time)/(100365246060);
         let val = "";
         val+=final;
         await web3.eth.sendTransaction({ from: App.account, to: lender.lender, value: web3.utils.toWei(val, 'ether')}).then(async function(receipt){
           console.log(receipt);
          App.bool = false;
        });
        }
      })
    },
}

$(document).ready(() => {

  App.load();

})