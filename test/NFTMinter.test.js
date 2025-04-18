const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMinter", function () {
  let NFTMinter, nftMinter, owner, addr1;

  const testURI = "https://example.com/metadata/1.json";

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    NFTMinter = await ethers.getContractFactory("NFTMinter");
    nftMinter = await NFTMinter.deploy(owner.address);
    await nftMinter.waitForDeployment();
  });

  it("should deploy with correct name and symbol", async () => {
    expect(await nftMinter.name()).to.equal("NFTMinter");
    expect(await nftMinter.symbol()).to.equal("NFT");
  });

  it("should mint NFT and assign to address", async () => {
    const tx = await nftMinter.safeMint(addr1.address, testURI);
    await tx.wait();

    expect(await nftMinter.ownerOf(0)).to.equal(addr1.address);
  });

  it("should set correct tokenURI", async () => {
    const tx = await nftMinter.safeMint(addr1.address, testURI);
    await tx.wait();

    expect(await nftMinter.tokenURI(0)).to.equal(testURI);
  });

  it("should not allow non-owner to mint", async () => {
    await expect(
      nftMinter.connect(addr1).safeMint(addr1.address, testURI)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("should increment tokenId on each mint", async () => {
    await nftMinter.safeMint(addr1.address, "uri1");
    await nftMinter.safeMint(addr1.address, "uri2");

    expect(await nftMinter.tokenURI(0)).to.equal("uri1");
    expect(await nftMinter.tokenURI(1)).to.equal("uri2");
  });

  it("should return total supply and correct token IDs", async () => {
    await nftMinter.safeMint(addr1.address, testURI);
    await nftMinter.safeMint(addr1.address, testURI);

    expect(await nftMinter.totalSupply()).to.equal(2);
    expect(await nftMinter.tokenByIndex(0)).to.equal(0);
    expect(await nftMinter.tokenByIndex(1)).to.equal(1);
  });
});
