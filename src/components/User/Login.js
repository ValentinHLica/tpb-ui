import React, { useState } from "react";
import axios from "axios";

import "./style.css";

import EyeIcone from "../../assets/img/eye.svg";
import EyeOffIcone from "../../assets/img/eye-off.svg";

import Loading from "../other/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const submit = async (form) => {
    form.preventDefault();
    setLoading(true);
    setErr(false);

    const url = window.api_url;
    await axios
      .post(
        `${url}auth/login`,
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-type": "application-json",
          },
        }
      )
      .then((e) => {
        console.log(e.data);
      })
      .catch(() => {
        setErr(true);
        setTimeout(() => {
          setErr(false);
        }, 2500);
      });

    setLoading(false);
  };

  return (
    <div className="login">
      <form className="user-form" onSubmit={submit}>
        <h1>Login</h1>
        <div className="username">
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            value={username}
            minLength="3"
            maxLength="15"
          />
        </div>

        <div className="email">
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            value={email}
          />
        </div>

        <div className="password">
          <p>Password</p>
          <span>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              value={password}
              minLength="6"
            />
            <div
              className="show-password"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <img src={!showPassword ? EyeIcone : EyeOffIcone} alt="" />
            </div>
          </span>
        </div>

        <button type="submit" className="submit">
          {loading ? <Loading show={loading} /> : "Login"}
        </button>
      </form>
    </div>
  );
}
