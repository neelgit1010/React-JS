import { FaUserAlt, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Register = ({ showPassword, setShowPassword }) => {
  return (
    <div className="card">
      <form action="">
        <h1>Rgister</h1>
        <div className="input-box">
          <MdEmail className="icon" />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-box">
          <FaUserAlt className="icon" />
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <FaLock className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="icon-eye"
            onClick={() => setShowPassword((curr) => !curr)}
          >
            {!showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      <p className="register-link">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;