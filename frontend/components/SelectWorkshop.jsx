import { useState } from "react";
import { ethers } from "ethers";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import contractAddress from "../contracts/contract-address.json";
import contractABI from "../contracts/MultiToken.json";

const animatedComponents = makeAnimated();

const SelectWorkshop = ({ address, setLoading, setTransactionHash }) => {
  const [attended, setAttended] = useState([]);

  const options = [
    { value: "1", label: "AR VR Workshop" },
    { value: "2", label: "Web3 Workshop" },
    { value: "3", label: "Unity Workshop" },
    { value: "4", label: "React Workshop" },
    { value: "5", label: "NodeJS Workshop" },
  ];

  const sendNFTs = async (ids, amounts) => {
    const provider = ethers.getDefaultProvider(
      "wss://eth-sepolia.g.alchemy.com/v2/sj00u9Wp2Jl5XEJSy9euqCiexoVwgbIR"
    );
    const wallet = new ethers.Wallet(
      "0109d9b7601d3ec8dec3160a776cd90cf6bc1adc35e2e2142b8770790196054c"
    );
    const signer = wallet.connect(provider);

    const contract = new ethers.Contract(
      contractAddress.MultiToken,
      contractABI.abi,
      signer
    );
    console.log(contract);

    const transaction = await contract.mintBatch(address, ids, amounts, "0x00");

    // Get the transaction hash (ID)
    const txHash = transaction.hash;
    console.log("Transaction Hash:", txHash);

    // Wait for the transaction to be mined (optional)
    const receipt = await transaction.wait();
    setTransactionHash(txHash);
    setLoading(false);
    console.log("Transaction Receipt:", receipt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const ids = attended.map((attended) => attended.value);
    const amounts = Array(ids.length).fill(1);

    sendNFTs(ids, amounts);
  };

  return (
    <>
      <form className="frm" onSubmit={handleSubmit}>
        <h4>Select attended workshops</h4>
        <Select
          options={options}
          isMulti
          value={attended}
          onChange={(selected) => setAttended(selected)}
          components={animatedComponents}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "#1a1a1a",
              color: "white",
              borderColor: state.isFocused ? "#646cff" : "transparent",
              ":hover": {
                borderColor: "#646cff",
              },
            }),
            option: (styles) => {
              return {
                ...styles,
                backgroundColor: "#1a1a1a",
                borderBottom: "1px solid #646cff",
                ":hover": {
                  backgroundColor: "#22255b",
                },
              };
            },
            menu: (styles) => ({
              ...styles,
              backgroundColor: "#1a1a1a",
            }),
            multiValue: (styles) => {
              return {
                ...styles,
                backgroundColor: "#1a1a1a",
                border: "1px solid orange",
              };
            },
            multiValueLabel: (styles) => ({
              ...styles,
              color: "orange",
            }),
          }}
        />
        <button type="submit">Get certificates</button>
      </form>
    </>
  );
};

export default SelectWorkshop;
