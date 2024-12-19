import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, showUser } from "../features/userSlice";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  useEffect(() => {
    dispatch(login(user));
  },[user])
  const authenticate = (e) => {
    e.preventDefault();
    for (let u in user) {
      if (user[u] === undefined || user[u] === "") {
        toast.error("All fields are needed");
        return;
      }
    }
    // console.log(currUser)
    if (!currUser) {
      toast.error("Invalid Credentials")
    }else{
      toast.success("Logged in successfully!!")
      localStorage.setItem("currUser", JSON.stringify(currUser))
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1>Welcome to ABCD Bank of India</h1>
      <div className="sm:w-1/3 w-full border-1 bg-slate-600 rounded-lg border-white p-5 my-[150px] shadow-xl">
        <h2 className="text-2xl text-center mb-2">Login</h2>
        <hr /> <br />
        <form
          className="flex flex-col gap-6 text-black"
          method="post"
          onSubmit={authenticate}
        >
          <input
            type="text"
            name="ac_no"
            className="p-3 rounded-md"
            placeholder="Account Number"
            onChange={(e) => setUser({ ...user, ac_no: e.target.value })}
          />
          <input
            type="number"
            name="pin"
            className="p-3 rounded-md"
            placeholder="PIN Number"
            onChange={(e) => setUser({ ...user, pin: e.target.value })}
          />
          <button
            className="p-3 rounded-lg bg-purple-900 text-white font-semibold hover:bg-purple-700"
            type="submit"
          >
            Login
          </button>
        </form>
        <Link to={"/register"}>
          {" "}
          <p className="text-center underline mt-4"> Don't hae an Account?</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;