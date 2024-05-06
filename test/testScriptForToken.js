
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StandardBEP20", function () {
  it("Should deploy and mint initial balance", async function () {
    const StandardBEP20 = await ethers.getContractFactory("StandardBEP20");
    const token = await StandardBEP20.deploy("MyToken", "MTK", 18, 1000);
    
    await token.deployed();
    
    const name = await token.name();
    const symbol = await token.symbol();
    const decimals = await token.decimals();
    const totalSupply = await token.totalSupply();
    
    expect(name).to.equal("MyToken");
    expect(symbol).to.equal("MTK");
    expect(decimals).to.equal(18);
    expect(totalSupply).to.equal(1000 * 10 ** 18);
  });
});
