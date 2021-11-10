const Lending = artifacts.require("Lending");

contract('Lending', async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Lending.new({from:owner});
  })

  it("should create a new proposal", async () => {
    const {logs} = await contractInstance.createProposal(100, 50, "0x6162636400000000000000000000000000000000000000000000000000000000", {from:alice});

    const proposal = await contractInstance.proposals(0);
    assert.equal(proposal.borrower, alice)
    assert.equal(proposal.amount, 100)
    assert.equal()
  })
});
