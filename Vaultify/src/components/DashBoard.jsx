import { FaPowerOff } from "react-icons/fa";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DashBoard = () => {
  const bankOptions = ["Deposit", "Withdraw", "Transfer", "Request Loan"];
  const navigate = useNavigate();
  // Get the current user from the Redux store
  const {currUser, transactions} = useSelector((state) => state.users);

  // If `currUser` is null, render a fallback UI
  if (!currUser) {
    return (
      <div className="text-red-500 text-center text-2xl flex flex-col justify-center items-center gap-2">
        <p>No User found</p>
        <p>Never Refresh or Hard Reload the page</p>
        <p>It will sign you out automatically</p>

        <Link to="/">
          <button className="p-2 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700 mt-2">
            Login Again
          </button>
        </Link>
      </div>
    );
  }

  const loanEligiblity = () => {
    let transSum = 0;
    transSum = transactions.reduce((acc, curr) => acc + Math.abs(curr), 0);
    console.log(transSum, transactions);
    
    if (transSum > 10000 && currUser.blnc > 10000) return true;
    return false;
  };

  const logOut = () => {
    localStorage.removeItem("currUser");
    navigate("/");
    toast.success("Logged out Successfully");
  };

  // Render the dashboard content
  return (
    <div className="text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl">Welcome Back!!</h1>
        <button
          className="flex items-center gap-1 font-bold text-red-500"
          onClick={logOut}
        >
          <FaPowerOff />
          Logout
        </button>
      </div>
      <div className="flex justify-between mt-2">
        <p className="sm:text-xl font-bold text-green-500">
          {currUser.ac_holder}
        </p>
        <p className="sm:text-xl text-yellow-300">
          Last seen: {new Date().toLocaleTimeString()}
        </p>
      </div>

      <div className="sm:mt-[50px] mt-9 bg-purple-900 p-5 rounded-xl sm:text-xl shadow-lg">
        <div className="flex justify-between p-2">
          <p className="ml-2">You have</p>
          <p
            className={`mr-2 text-green-400 font-bold ${
              currUser.blnc > 100 ? "text-green-500" : "text-red-500"
            }`}
          >
            ₹ {currUser.blnc}
          </p>
        </div>
        <div className="mt-3 p-5 bg-slate-900 rounded-xl">
          <p className="text-center sm:text-left">Savings Account</p>
          <hr />
          <div className="sm:grid sm:grid-cols-3">
            <p className="mt-4 text-center">A/C Number : {currUser.ac_no}</p>
            <p className="mt-4 text-center">
              A/C Holder : {currUser.ac_holder}
            </p>
            <p className="mt-4 text-center">Branch Name : Chinsurah</p>
            <p className="mt-4 text-center">IFSC : {currUser.ifsc}</p>
            <p
              className={`mt-4 text-center ${
                currUser.blnc > 100 ? "text-green-500" : "text-red-500"
              }`}
            >
              Balance : {currUser.blnc}
            </p>
            <p
              className={`mt-4 text-center ${
                loanEligiblity() ? "text-green-500" : "text-red-500"
              }`}
            >
              Loan : {loanEligiblity() ? "Eligible" : "Not Eligible"}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mt-[50px] mt-7 grid grid-cols-2 text-center text-sm sm:text-2xl">
        {bankOptions.map((e, i) => (
          <Link to="/work" key={i} state={e}>
            <Card text={e} className={`${currUser.loan_sts && "text-gray-500 cursor-default"}`}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
