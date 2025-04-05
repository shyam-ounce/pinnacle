import React from "react";
import "./style.css";
import Image from "../../components/image";

const Auth = () => {
  const [isRegister, setIsRegister] = React.useState(false);
  const [error, setError] = React.useState("");

  return (
    <div className="auth">
      <div className="auth__container">
        <Image path={"/general/logo.png"} alt={"Logo"} />
        <h1>{isRegister ? "Create an account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key={"registerForm"}>
            <div className="form__group">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                id="userName"
                autoComplete="off"
              />
            </div>
            <div className="form__group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                autoComplete="off"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                autoComplete="off"
              />
            </div>
            <div className="form__group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                autoComplete="off"
              />
            </div>
            <button>Register</button>
            <p
              role="button"
              tabIndex={0}
              onClick={() => setIsRegister(!isRegister)}
            >
              Do you have an account? <b>Login</b>
            </p>
            <span className="error">{error}</span>
          </form>
        ) : (
          <form key={"loginForm"}>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <p
              role="button"
              tabIndex={0}
              onClick={() => setIsRegister(!isRegister)}
            >
              Don&apos;t have an account? <b>Register</b>
            </p>
            {error && <span className="error">{error}</span>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
