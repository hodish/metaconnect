import { useGlobalContext } from "./context";
import { ethers } from "ethers";

const Profile = () => {
  const { defaultAccount } = useGlobalContext();

  const handleSignMessage = async (event) => {
    event.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    await signer.signMessage(`Hello ${event.target.username.value}`);
  };

  return (
    <div className=" space-y-4 mt-4">
      <h4 className="text-lg ">Wallet Address:{defaultAccount}</h4>
      <form onSubmit={handleSignMessage}>
        <input
          name="username"
          type="text"
          placeholder="username"
          autofocus
          className="shadow p-2 border-2"
        />
        <br />
        <button
          className="rounded shadow-sm bg-purple-500 px-8 py-3 my-10 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
