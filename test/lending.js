const Lending = artifacts.require("Lending");


contract('Lending', async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Lending.new({from:owner});
  })

  it("should repay the amount to lender", async () => {
    try {
      const log = await contractInstance.createProposal(
        100,
        1000000000000000,
        "0x6162636400000000000000000000000000000000000000000000000000000000",
        {from: alice}        
      );
      const value = await contractInstance.proposals(0);
      const firstTime = await contractInstance.acceptProposal(
        100,
        2,
        0,
        {from: bob}
      );
      const potential = (await contractInstance.potential_lenders(0));
      const borrow = await contractInstance.acceptLender(
        0,
        0,
        {from: alice,
          gasPrice: 8000000000,
         gas: 4700000}
      );
      
      const valueF = (await contractInstance.proposals(0));

    }
    catch(err)
    {
      assert.equal(err,null,err);
    }
    contractInstance = await Lending.new();
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
    await contractInstance.createProposal(100, 50, "0x6162636400000000000000000000000000000000000000000000000000000000", {from:alice});
    await contractInstance.acceptProposal(100, 5, 0, {from: bob});
    await contractInstance.acceptLender(0, 0, {from: alice, gasPrice: 8000000000, gas: 4700000});
    
    const loan = await contractInstance.loans(1);
    assert.equal(loan.lender, bob);
  })
});
