import React, { useState } from "react";
import "../css/loginPage.css";

const LoginPage = ({ setScreen }) => {
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });

  const [error, setErro] = useState("");
  const [done, setDone] = useState();

  const setUsers = (e) => {
    setUsername((item) => {
      const { value, name } = e.target;
      return {
        ...item,
        [name]: value,
      };
    });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const { username: name, password } = username;
    if (name === "" || password === "") {
      setErro("Invalid..");
    } else {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(username),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.id) {
            localStorage.setItem("user_id", data?.id);
            setDone("😜 Done ✔");
            setScreen("Home");
          } else {
            setErro("Login Failed")
          }
        });
    }
  };

  if(error) return <h2>{error}</h2>
  return (
    <div className="back">
      <div className="ptag">
        <span>
          Don't Have An Account?
          <span onClick={() => setScreen("Registation")} className="link">
            Registation
          </span>
        </span>
      </div>
      <form onSubmit={handelLogin}>
        <div className="div">
          <div className="main">
            <h2>Please Login</h2>
            <div className="input_field">
              <input
                type="username"
                required
                name="username"
                value={username.username}
                onChange={setUsers}
                placeholder="Enter username.."
              />
              <input
                type="passwordword"
                name="password"
                value={username.password}
                onChange={setUsers}
                placeholder="Enter passwordword.."
              />
            </div>
            <div className="btn">
              <button
                type="submit"
                className="glow-on-hover"
                disabled={username.username.length <= 0 && username.password.length <= 0}
              >
                login
              </button>
            </div>
            <h3 className="error"> {done} </h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
