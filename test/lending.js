const Lending = artifacts.require("Lending");


contract('Lending', async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Lending.new({from: owner});
  })

  it("should create a new proposal", async () => {
    const {logs} = await contractInstance.createProposal(100, 50, "0x6162636400000000000000000000000000000000000000000000000000000000", {from:alice});

    const proposal = await contractInstance.proposals(0);
    assert.equal(proposal.borrower, alice)
    assert.equal(proposal.amount, 100)
    assert.equal(proposal.time, 50)
    assert.equal(proposal.mortgage, "0x6162636400000000000000000000000000000000000000000000000000000000")
    assert.equal(proposal.state, 2)

    const borrower = await contractInstance.proposalToBorrower(0);
    assert.equal(borrower, alice);
    
  })

  it("should accept the lender", async () => {
    await contractInstance.createProposal(10, 50, "0x6162636400000000000000000000000000000000000000000000000000000000", {from:alice});
    await contractInstance.acceptProposal(10, 5, 0, {from: bob});
  
    await contractInstance.sendETHtoContract({from:bob, value:10});
    
    await contractInstance.acceptLender(0, 0, {from: alice, gasPrice: 8000000000, gas: 4700000});
      
 
    // const loan = await contractInstance.loans(1);
    // assert.equal(loan.lender, bob);
  })

  it("should repay the amount to lender", async () => {
    try {
      await contractInstance.createProposal(
        100000,
        1605089347,
        "0x6162636400000000000000000000000000000000000000000000000000000000",
        {from: alice}        
      );
      await contractInstance.acceptProposal(
        100000,
        2,
        0,
        {from: bob}
      );
      await contractInstance.sendETHtoContract({from:bob, value:100000});
       
     await contractInstance.acceptLender(
        0,
        0,
        {from: alice,
          gasPrice: 8000000000,
          gas: 4700000}
      );

      var balance = await web3.eth.getBalance(alice);
      console.log("1: " + balance);
      
      await contractInstance.sendETHtoContract({from:alice, value:100000});

      await contractInstance.repayLoan(
        0,
        {from: bob,
        value: 100000}
      );

      balance = await web3.eth.getBalance(alice);
      console.log("2: " + balance);

      const check = (await contractInstance.loans(0)).state;
      assert.equal(check, 0);
      

    }
    catch(err)
    {
      assert.equal(err,null,err);
    }
    contractInstance = await Lending.new();
  })
});
