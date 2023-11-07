import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header/Header";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );

      const { user, token } = response.data;
      console.log("Login successful", user);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
