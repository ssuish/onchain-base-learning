import { expect } from "chai";
import { ethers, deployments } from "hardhat";

// A helper utility to get the timestamp.
import { time } from "@nomicfoundation/hardhat-network-helpers";

// We import this type to have our signers typed.
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

// Types from typechain
import { SimpleBank__factory, SimpleBank } from "../typechain-types";

describe("SimpleBank", function () {
  let simpleBank: SimpleBank;
  let deployer: SignerWithAddress;
  let user: SignerWithAddress;

  beforeEach(async function () {
    [deployer, user] = await ethers.getSigners();

    await deployments.fixture(["SimpleBank"]);
    simpleBank = SimpleBank__factory.connect(
      (await deployments.get("SimpleBank")).address as string,
      deployer
    );
  });

  describe("Balances", function () {
    it("should set and get the balance correctly", async function () {
      await simpleBank.setBalances(user.address, 1000);
      expect(await simpleBank.getBalances(user.address)).to.equal(1000);
    });
  });

  describe("Increase Balance", function(){
    it("should increase sender's balance", async function() {
      expect(await simpleBank.getBalances(deployer.address)).to.equal(0);
      await simpleBank.increaseBalance(50);
      expect(await simpleBank.getBalances(deployer.address)).to.equal(50);
    });
  })

  describe("Decrease Balance", function(){
    it("should decrease sender's balance", async function() {
      await simpleBank.increaseBalance(50);
      expect(await simpleBank.getBalances(deployer.address)).to.equal(50);
      await simpleBank.decreaseBalance(20);
      expect(await simpleBank.getBalances(deployer.address)).to.equal(30);
    });

    it("should fail if sender's balance is insufficient", async function() {
      await expect(simpleBank.decreaseBalance(20)).to.be.revertedWith("Insufficient balance");
    });
  })
});
