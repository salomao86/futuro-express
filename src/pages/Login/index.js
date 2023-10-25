import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";
import styled from 'styled-components';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { setAuthTokens } = useAuth();

  const Error = styled.div`
  background-color: red;`;

  const postLogin = (e) => {
    e.preventDefault();
    console.log("postLogin");
    axios
      .post("http://localhost:3001/auth/login", {
        "email": email,
        "senha": senha
      })
      .then((result) => {
        if (result.status === 200) {
          console.log(result.data);
          setAuthTokens(result.data.token);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
      
  };

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block text-gray-700">Password</label>
            <input
              type="senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
              id="senha"
              name="senha"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button onClick={postLogin}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {isError && (
          <Error>Email ou senha incorreto!</Error>
        )}

      </div>
    </div>
  );
};

export default Login;
