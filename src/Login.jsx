import { useState } from "react";
const Login = () => {
  let [user, setUser] = useState({});
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="username"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="username"
        />
        <input
          name="password"
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
