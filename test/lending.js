const Lending = artifacts.require("Lending");


contract('Lending', async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Lending.new({from:owner});
  })

  it("should create a new proposal", async () => {
    try{
      const {logs} = await contractInstance.createProposal(100, 50, "0x6162636400000000000000000000000000000000000000000000000000000000", {from:alice});

      const proposal = await contractInstance.proposals(0);
      assert.equal(proposal.borrower, alice)
      assert.equal(proposal.amount, 100)
      assert.equal(proposal.time, 50)
      assert.equal(proposal.mortgage, "0x6162636400000000000000000000000000000000000000000000000000000000")
      assert.equal(proposal.state, 2)

      const borrower = await contractInstance.proposalToBorrower(0);
      assert.equal(borrower, alice);
    }
    catch(err)
    {
      assert.equal(err,null,err);
    }
    
    
  })


  it("should allow lender to accept a borrower's proposal", async () => {
    await contractInstance.createProposal(
      100,
      50,
      "0x6162636400000000000000000000000000000000000000000000000000000000",
      { from: alice }
    );
    await contractInstance.acceptProposal(10, 2, 0, {
      from: bob,
      gasPrice: 8000000000,
      gas: 4700000,
    });

    const loan = await contractInstance.potential_lenders(0);
    assert.equal(loan.loanId, 0);
    assert.equal(loan.loanAmount, 10);
    assert.equal(loan.interestRate, 2);
    assert.equal(loan.proposalId, 0);
    assert.equal(loan.time, 0);

    const lender = await contractInstance.loanToLender(0);
    assert.equal(lender, bob);
  });

  it("should accept the lender", async () => {
    try{
      await contractInstance.createProposal(10, 50, "0x6162636400000000000000000000000000000000000000000000000000000000", {from:alice});
      await contractInstance.acceptProposal(10, 5, 0, {from: bob});
    
      await contractInstance.sendETHtoContract({from:bob, value:10});
      
      await contractInstance.acceptLender(0, 0, {from: alice, gasPrice: 8000000000, gas: 4700000});
        
  
      const loan = await contractInstance.loans(0);
      assert.equal(loan.lender, bob);
      assert.equal(loan.loanAmount, 10);
      assert.equal(loan.interestRate, 5);
      assert.equal(loan.proposalId, 0);
      assert.equal(loan.state, 3);
    }
    catch(err)
    {
      assert.equal(err,null,err);
    }
    
  })

  it("should repay the amount to lender", async () => {
    try {
      const log = await contractInstance.createProposal(
        100000,
        1605089347,
        "0x6162636400000000000000000000000000000000000000000000000000000000",
        {from: alice}        
      );
      const value = await contractInstance.proposals(0);
      const firstTime = await contractInstance.acceptProposal(
        100000,
        2,
        0,
        {from: bob}
      );
      const potential = (await contractInstance.potential_lenders(0));
      await contractInstance.sendETHtoContract({from:bob, value:100000});
       
      const borrow = await contractInstance.acceptLender(
        0,
        0,
        {from: alice,
         }
      );

      await contractInstance.sendETHtoContract({from:alice, value:200000});
      const repay = await contractInstance.repayLoan(
        0,
        {from: alice,
        value: 200000}
      );
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