const ProposalState = {
  0: "ACCEPTED",
  1: "ACCEPTING",
  2: "WAITING",
};

App = {
  crypt: "",
  param: "",
  URL: "https://ipfs.io/ipfs/",

  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.loadDetails();
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

  loadDetails: async () => {
    const proposals = await App.contract.methods.getAllProposals().call();
    let searchParams = new URLSearchParams(window.location.search);
    App.param = searchParams.get("a");
    proposals.forEach((proposal) => {
      var date = new Date(proposal.time * 1000);
      var dueDate =
        date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
      if ((proposal.proposalId === App.param)) {
        let pdf = App.URL + proposal.mortgage;
        $(".v").html(`
            <div class="form-group">
                <div class="form-group">
                  <p class="nav-item ml-auto">Account no.</p>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                  type="text"
                  class="form-control"
                  id="id"
                  placeholder="${proposal.borrower}"
                  aria-label="Account No."
                  aria-describedby="basic-addon1"
                  disabled
                />
                </div>
              </div>
              <div class="form-group">
                <p class="nav-item ml-auto">Loan Amount</p>
              </div>
              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                    <i class="fab fa-ethereum"></i>
                    </span>
                  </div>
                  <input
                  type="text"
                  class="form-control"
                  id="id"
                  placeholder="${proposal.amount}"
                  aria-label="Account No."
                  aria-describedby="basic-addon1"
                  disabled
                />
                </div>
              </div>
              <div class="form-group">
                <p class="nav-item ml-auto">Date</p>
              </div>
              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-percent"></i>
                    </span>
                  </div>
                  <input
                  type="text"
                  class="form-control"
                  id="id"
                  placeholder="${dueDate}"
                  aria-label="Account No."
                  aria-describedby="basic-addon1"
                  disabled
                />
                </div>
              </div>
              <a href="" id="url" target="myIframe"></a>
              <iframe id="pdfRenderer" width="100%" height="400px" name="myIframe"></iframe>
              <br />
              <a href="./giveLoan.html?borrower=${proposal.proposalId}">
              <div class="btn btn-success btn-lg btn-block" >
                <i class="fas fa-hand-holding-usd"></i> Give Loan
              </div>
              </a>
            </form>
            `);
        $("#url").attr("href", pdf).click();
        document.getElementById("pdfRenderer").src = pdf;
      }
    });
  },
};

$(document).ready(() => {
  App.load();
});
