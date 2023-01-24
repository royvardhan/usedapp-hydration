import { useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";

const shortenAddress = (addr: string) =>
  `${addr.slice(0, 5)}...${addr.slice(-4)}`;

const MetamaskConnect = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <div className="container">
      <h2>
        {isMounted
          ? !account
            ? "Please connect your wallet."
            : `Connected Wallet: ${shortenAddress(account)}`
          : null}
      </h2>
      {!account ? (
        <button className="connect" onClick={() => activateBrowserWallet()}>
          Connect
        </button>
      ) : (
        <button className="disconnect" onClick={() => deactivate()}>
          Disconnect
        </button>
      )}
    </div>
  );
};

export default MetamaskConnect;
