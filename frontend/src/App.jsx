import Metamask from "../components/Metamask";
import { useState } from "react";

import "./App.css";
import SelectWorkshop from "../components/SelectWorkshop";

function App() {
  const [metamaskConnected, setMetamaskConnected] = useState(false);

  return (
    <>
      <Metamask setMetamaskConnected={setMetamaskConnected} />
      {metamaskConnected && <SelectWorkshop />}
    </>
  );
}

export default App;
