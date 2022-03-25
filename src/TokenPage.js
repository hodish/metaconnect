import { useGlobalContext } from "./context";

const TokenPage = () => {
  const { userBalance, defaultAccount } = useGlobalContext();
  return (
    <div>
      <h4>Wallet Address:{defaultAccount}</h4>
      <h3>Balance:{userBalance}</h3>
    </div>
  );
};

export default TokenPage;
