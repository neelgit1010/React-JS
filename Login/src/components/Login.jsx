import { FaUserAlt, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Login = ({ showPassword, setShowPassword }) => {

  const navigate = useNavigate();
  const openDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <LandingPage>
      <div className="card">
      <form action="/dashboard" onSubmit={(e) => openDashboard(e)}>
        <h1>Login</h1>
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

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
    </LandingPage>
  );
};

export default Login;

const LandingPage = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url("bg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
`