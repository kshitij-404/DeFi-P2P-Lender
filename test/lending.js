const Lending = artifacts.require("Lending");


contract('Lending', async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Lending.new({from:owner});
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
        bob,
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
});
