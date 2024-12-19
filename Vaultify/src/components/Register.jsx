import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../features/userSlice";
import toast from "react-hot-toast";

const Register = () => {

  const navigate = useNavigate()

  const allUsers = useSelector( state => state.users.users)
  const [user, setUser] = useState(
    {
      ac_no: "",
      ac_holder: "",
      pin: "",
      ifsc: "",
      blnc: "0.00",
      loan_sts: true,
    }
  )
  const dispatch = useDispatch()
  const getUserData = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    for(let u in user){
      if(user[u] === undefined || user[u] === ""){
        toast.error("All fields are needed")
        return
      }
    }

    if(allUsers.some(e => e.ac_no === user.ac_no)){
      toast.error("Account alread exists, Kindly Login!")
      return
    }
    dispatch(createUser(user))
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1>Welcome to ABCD Bank of India</h1>
      <div className="sm:w-1/3 w-full border-1 bg-slate-600 rounded-lg border-white p-5 sm:my-[50px] my-[100px] shadow-xl">
        <h2 className="text-2xl text-center mb-2">Register</h2>
        <hr /> <br />
        <form className="flex flex-col gap-6 text-black font-semibold" method="post" onSubmit={handleSubmit}>
          <input
            type="number"
            name="ac_no"
            className="p-3 rounded-md"
            placeholder="Account Number"
            onChange={getUserData}
          />
          <input
            type="number"
            name="pin"
            className="p-3 rounded-md"
            placeholder="PIN Number"
            onChange={getUserData}
          />
          <input
            type="text"
            name="ifsc"
            className="p-3 rounded-md"
            placeholder="IFSC Number"
            onChange={getUserData}
          />
          <input
            type="text"
            name="ac_holder"
            className="p-3 rounded-md"
            placeholder="Account Holder Name"
            onChange={getUserData}
          />
          <button className="p-3 rounded-lg bg-purple-900 text-white hover:bg-purple-700" type="submit">Sign up</button>
        </form>
        <Link to={"/"}>
          {" "}
          <p className="text-center underline mt-4">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
