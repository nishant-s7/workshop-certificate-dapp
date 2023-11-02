import { useState } from "react";
import Select from "react-select";

const SelectWorkshop = () => {
  const [attended, setAttended] = useState([]);

  const options = [
    { value: "1", label: "AR VR Workshop" },
    { value: "2", label: "Web3 Workshop" },
    { value: "3", label: "Unity Workshop" },
    { value: "4", label: "React Workshop" },
    { value: "5", label: "NodeJS Workshop" },
  ];

  return (
    <>
      <form>
        <Select options={options} />
      </form>
    </>
  );
};

export default SelectWorkshop;
