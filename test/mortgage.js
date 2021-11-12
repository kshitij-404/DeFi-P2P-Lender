const Mortgage = artifacts.require("Mortgage");

contract("Mortgage", async ([owner, alice, bob]) => {
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await Mortgage.new({ from: owner });
  });

  it("should add Mortgage", async () => {
    const { logs } = await contractInstance.addMortgage(
      "0x7465737400000000000000000000000000000000000000000000000000000000",
      { from: alice }
    );

    const borrower = await contractInstance.mortgageToBorrower(
      "0x7465737400000000000000000000000000000000000000000000000000000000"
    );
    assert.equal(borrower, alice);
  });
});
