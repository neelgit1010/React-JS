import { FaPowerOff } from "react-icons/fa";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashBoard = () => {
  localStorage.setItem(
    "currUser",
    JSON.stringify(useSelector((state) => state.users.currUser))
  );
  const currUser = JSON.parse(localStorage.getItem("currUser"));
  if (currUser === null) {
    return (
      <div className="text-red-500 text-center text-2xl">
        Never Refresh or hard Reload the page
        <br />
        It will signed you out automatically
        <br />
        <Link to="/">
        <button className="p-2 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700 mt-2">
          Login Again
        </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl">Welcome Back!!</h1>
        <button className="flex items-center gap-1 font-bold text-red-500">
          <FaPowerOff />
          Logout
        </button>
      </div>
      <div className="flex justify-between mt-2">
        <p className="sm:text-xl font-bold text-green-500">{currUser.ac_holder}</p>
        <p className="sm:text-xl text-yellow-300">Last seen: {new Date().toLocaleTimeString()}</p>
      </div>

      <div className="sm:mt-[50px] mt-9 bg-purple-900 p-5 rounded-xl sm:text-xl shadow-lg">
        <div className="flex justify-between p-2">
          <p className="ml-2">You have</p>
          <p className="mr-2 text-green-400 font-bold">₹ {currUser.blnc}</p>
        </div>
        <div className="mt-3 p-5 bg-slate-900 rounded-xl">
          <p className="text-center sm:text-left">Savings Account</p>
          <hr />
          <div className="sm:grid sm:grid-cols-3">
            <p className="mt-4 text-center">A/C Number : {currUser.ac_no} </p>
            <p className="mt-4 text-center">
              A/C Holder : {currUser.ac_holder}{" "}
            </p>
            <p className="mt-4 text-center">Branch Name : Chinsurah </p>
            <p className="mt-4 text-center">IFSC : {currUser.ifsc} </p>
            <p className="mt-4 text-center">Balance : {currUser.blnc} </p>
            <p className="mt-4 text-center">
              Loan : {currUser.loan_sts ? "Eligible" : "Not ELigible"}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mt-[50px] mt-7 grid grid-cols-2 text-center">
        <Card text={"Deposit"} />
        <Card text={"Withdraw"} />
        <Card text={"Transfer"} />
        <Card text={"Reuest Loan"} />
      </div>
    </div>
  );
};

export default DashBoard;
