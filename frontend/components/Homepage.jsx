// import { ethers } from "ethers";
// import { useState } from "react";

// import contractAddress from "../contracts/contract-address.json";
// import contractABI from "../contracts/Soulbound.json";

const Homepage = () => {
  // const [address, setAddress] = useState("");

  // const handleClick = () => {
  //   getContract();
  // };

  // const getContract = async () => {
  //   const provider = ethers.getDefaultProvider(
  //     "wss://eth-sepolia.g.alchemy.com/v2/sj00u9Wp2Jl5XEJSy9euqCiexoVwgbIR"
  //   );
  //   const wallet = new ethers.Wallet(
  //     "0109d9b7601d3ec8dec3160a776cd90cf6bc1adc35e2e2142b8770790196054c"
  //   );
  //   const signer = wallet.connect(provider);

  //   const contract = new ethers.Contract(
  //     contractAddress.Soulbound,
  //     contractABI.abi,
  //     signer
  //   );
  //   console.log(contract);

  //   const transaction = await contract.safeMint(address);

  //   // Get the transaction hash (ID)
  //   const txHash = transaction.hash;
  //   console.log("Transaction Hash:", txHash);

  //   // Wait for the transaction to be mined (optional)
  //   const receipt = await transaction.wait();
  //   console.log("Transaction Receipt:", receipt);
  // };

  return (
    <>
      <h1>Souls Workshop</h1>
      <form></form>
    </>
  );
};

export default Homepage;
