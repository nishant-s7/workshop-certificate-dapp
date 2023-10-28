const { expect } = require("chai");

describe("Soulbound Token Test", function () {
  let owner;

  //The beforeEach method is a feature (hook) in test libraries that you can use to set preconditions for each test.
  beforeEach(async function () {
    // Retrieve the default account from ethers
    [owner] = await ethers.getSigners();

    // A helper to get the contracts instance and deploy it locally
    // A contract factory is a way to create instances of a smart contract, and it provides a convenient way to interact with the contract's functions and deploy new instances of the contract.
    const Soulbound = await ethers.getContractFactory("Soulbound");
    soulbound = await Soulbound.deploy();

    // Mint token ID 1 to owner address
    await soulbound.safeMint(owner.address);
  });

  it("check the owner is correct", async () => {
    // Check that owner address owns the token ID 0
    const value = await soulbound.ownerOf(1);
    expect(value).to.equal(owner.address);
  });

  it("should revert when trying to transfer via safeTransferFrom", async () => {
    // Note that the approve function call will fail regardless
    const approve = await soulbound.approve(
      "0x000000000000000000000000000000000000dEaD",
      1
    );

    await expect(
      soulbound["safeTransferFrom(address,address,uint256)"](
        owner.address,
        "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
        1 // token id
      )
    ).to.be.reverted;
  });

  it("should revert when trying to transfer via transferFrom", async () => {
    // Note that the approve function call will fail regardless
    const approve = await soulbound.approve(
      "0x000000000000000000000000000000000000dEaD",
      1
    );

    await expect(
      soulbound["transferFrom(address,address,uint256)"](
        owner.address,
        "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
        1 // token id
      )
    ).to.be.reverted;
  });
});
