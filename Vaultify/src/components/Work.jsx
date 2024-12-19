import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { depositToAccount, withDrawalFromAccount } from "../features/userSlice";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";

const Work = () => {
  const location = useLocation();
  const text = location.state;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { users, currUser, transactions } = useSelector((state) => state.users);
  let { deposit, withDrawal } = useSelector((state) => state.users);

  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [loan, setLoan] = useState({
    loanAmount: "",
    loanStatus: false,
    approval: false,
    loanRequest: false
  });

  const handleDeposit = () => {
    deposit = true;
    if (amount && Number(amount) > 0) {
      const newBalance = Number(currUser.blnc) + Number(amount);
      dispatch(
        depositToAccount({
          id: currUser.id,
          amount: newBalance.toFixed(2),
          enteredAmount: Number(amount),
        })
      );
      setAmount("");
      console.log(transactions);

      if (deposit) {
        toast.success("Deposit Successful");
        deposit = false;
      }
      navigate("/dashboard");
    } else {
      toast.error("Please enter a valid amount!");
    }
  };

  const handleWithdrawal = () => {
    withDrawal = true;

    if (amount && Number(amount) > 0) {
      if (Number(currUser.blnc) < Number(amount)) {
        toast.error("Insufficient Balance");
      } else {
        const newBalance = Number(currUser.blnc) - Number(amount);
        dispatch(
          withDrawalFromAccount({
            id: currUser.id,
            amount: newBalance.toFixed(2),
            enteredAmount: Number(amount),
          })
        );
        setAmount("");
        console.log(transactions);

        if (withDrawal) {
          toast.success("Withdrawal Successful");
          withDrawal = false;
        }
        navigate("/dashboard");
      }
    } else {
      toast.error("Please enter a valid amount!");
    }
  };

  const handleTransfer = () => {
    if (users.some((e) => e.ac_no === receiver)) {
      if (Number(currUser.blnc) < amount) {
        toast.error("Can't transfer, Insufficient Balance");
        return;
      }

      const receiverUser = users.find((e) => e.ac_no === receiver);
      if (receiverUser.ac_no === currUser.ac_no) {
        toast.error("Self transfer not allowed!");
        return;
      }
      dispatch(
        withDrawalFromAccount({
          id: currUser.id,
          amount: (Number(currUser.blnc) - Number(amount)).toFixed(2),
        })
      );
      withDrawal = true;

      dispatch(
        depositToAccount({
          id: receiverUser.id,
          amount: (Number(receiverUser.blnc) + Number(amount)).toFixed(2),
        })
      );
      deposit = true;

      if (deposit && withDrawal) {
        toast.success("Transfer Successful");
        deposit = false;
        withDrawal = false;
      }
      navigate("/dashboard");
    } else {
      toast.error("Receiver Account doesn't exist!");
    }
  };

  const loanEligiblity = () => {
    let transSum = transactions.reduce((acc, curr) => acc + Math.abs(curr), 0);
    return transSum > 10000 && currUser.blnc > 10000;
  };
  const handleLoanRequest = () => {
    if (
      loanEligiblity() &&
      Number(loan.loanAmount) > 0 &&
      Number(loan.loanAmount) <= 100000
    ) {
      dispatch(
        depositToAccount({
          id: currUser.id,
          amount: (Number(currUser.blnc) + Number(loan.loanAmount)).toFixed(2),
        })
      );
      setLoan({...loan, loanStatus: true, approval: false})

      setTimeout(() => {
        setLoan({...loan, approval: true})
      }, 5000);

    } else {
      toast.error("Loan Eligibility not met with policy");
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center">
      {text === "Deposit" && (
        <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full">
          <h1>{text} here</h1>
          <input
            type="number"
            placeholder="Enter amount to Deposit"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update amount state
            className="w-full sm:w-2/3 p-2 rounded-lg outline-none text-black font-semibold"
          />
          <button
            className="p-3 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700"
            onClick={handleDeposit} // Call handleDeposit on click
          >
            {text}
          </button>
        </div>
      )}

      {text === "Withdraw" && (
        <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full">
          <h1>{text} here</h1>
          <input
            type="number"
            placeholder="Enter amount to Withdraw"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update amount state
            className="w-full sm:w-2/3 p-2 rounded-lg outline-none text-black font-semibold"
          />
          <button
            className="p-3 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700"
            onClick={handleWithdrawal} // Call handleDeposit on click
          >
            {text}
          </button>
        </div>
      )}

      {text === "Transfer" && (
        <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full">
          <h1>{text} here</h1>
          <input
            type="number"
            placeholder="Account Number"
            className="w-full sm:w-2/3 p-2 rounded-lg outline-none text-black font-semibold"
            onChange={(e) => setReceiver(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter amount to Transfer"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} // Update amount state
            className="w-full sm:w-2/3 p-2 rounded-lg outline-none text-black font-semibold"
          />
          <select
            className="w-full sm:w-2/3 p-2 rounded-lg outline-none text-black font-semibold"
            name="currency"
          >
            <option value={"inr"}>INR</option>
            <option value={"usd"}>USD</option>
            <option value={"eur"}>EUR</option>
            <option value={"jpy"}>JPY</option>
          </select>
          <button
            className="p-3 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700"
            onClick={handleTransfer}
            
          >
            {text}
          </button>
        </div>
      )}

<div>
      {text === "Request Loan" &&
        (loan.loanStatus || loanEligiblity() ? ( // Use loanRequested to persist state
          <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full">
            <h1>{text} here</h1>
            {!loan.loanRequest && ( // Show input only if loan not requested
              <>
                <p className="text-red-500 sm:text-xl text-sm text-center">
                  Loan amount should not exceed ₹1,00,000
                </p>
                <input
                  type="number"
                  placeholder="Enter Loan amount"
                  value={loan.loanAmount}
                  onChange={(e) =>
                    setLoan({ ...loan, loanAmount: e.target.value })
                  }
                  className="w-full sm:w-2/3 p-2 rounded-lg outline-none text-black font-semibold"
                />
              </>
            )}
            {!loan.approval && (
              <button
                className="p-3 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700"
                onClick={handleLoanRequest}
                disabled={loan.loanStatus}
              >
                {text}
              </button>
            )}
            {loan.approval ? (
              <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full text-green-500 sm:text-xl">
                Loan Approved
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full text-yellow-400 sm:text-xl">
                Pending for Loan Approval...
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5 bg-gray-900 p-5 rounded-lg w-full">
            <p>You are not eligible for a loan</p>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Work;
