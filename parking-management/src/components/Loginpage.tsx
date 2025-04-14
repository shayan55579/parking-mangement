// src/components/LoginPage.tsx
import React, { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">ورود به سامانه</h2>
        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full mb-3 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
