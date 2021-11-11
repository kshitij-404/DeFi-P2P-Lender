const Lending = artifacts.require("./Lending.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 * */
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
  })
});
