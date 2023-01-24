import React, { useEffect, useState } from "react";
import "./connectButton.css";
import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";

import { getDefaultProvider } from "ethers";
import ConnectButton from "./components/ConnectButton";
import { ClientRenderer } from "./hooks/ClientRenderer";

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
        <ClientRenderer>
          <ConnectButton />
        </ClientRenderer>
      </div>
    </DAppProvider>
  );
}

export default App;
