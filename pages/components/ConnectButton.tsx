import { useEthers } from "@usedapp/core";

const shortenAddress = (addr: string) =>
  `${addr.slice(0, 5)}...${addr.slice(-4)}`;

const MetamaskConnect = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <div className="container">
      <h2>
        {!account
          ? "Please connect your wallet."
          : `Connected Wallet: ${shortenAddress(account)}`}
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
