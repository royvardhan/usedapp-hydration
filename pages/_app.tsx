import React, { useEffect, useState } from "react";
import "./connectButton.css";
import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";

import { getDefaultProvider } from "ethers";
import ConnectButton from "./components/ConnectButton";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

function App() {
  return (
    <DAppProvider config={config}>
      <div>
        <ConnectButton />
      </div>
    </DAppProvider>
  );
}

export default App;
