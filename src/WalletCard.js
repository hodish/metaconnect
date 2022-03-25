import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";

const WalletCard = () => {
  const { connectWalletHandler, errorMessage, defaultAccount, userBalance } =
    useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!defaultAccount || !userBalance) return;

    if (userBalance === "0.0") {
      navigate(`/${defaultAccount}`);
    } else {
      navigate(`/profile`);
    }
  }, [userBalance, defaultAccount]);

  return (
    <div className=" mt-72">
      <div className="">
        <button
          className="rounded shadow-sm bg-purple-500 px-8 py-3 my-10 text-white"
          onClick={connectWalletHandler}
        >
          Connect
        </button>
      </div>
      {errorMessage}
    </div>
  );
};
export default WalletCard;
