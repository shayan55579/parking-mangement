// src/components/LoginPage.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        setError("");
        onLogin();
      } else {
        setError("نام کاربری یا رمز عبور اشتباه است");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Background image side */}
      <div
        className="lg:w-1/2 hidden lg:block bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg_1.png')" }}
      ></div>

      {/* Login form side */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-white">
        <motion.div
          className="w-full max-w-md px-6 py-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          dir="rtl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            ورود
          </h2>
          <p className="text-gray-500 text-center mb-6">
            لطفاً اطلاعات کاربری خود را وارد کنید.
          </p>

          {error && (
            <motion.div
              className="text-red-500 text-sm mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                نام کاربری
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                رمز عبور
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="1234"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="form-checkbox"
                />
                <span>مرا به خاطر بسپار</span>
              </label>
              <a href="#" className="text-indigo-500 hover:underline">
                رمز عبور را فراموش کرده‌اید؟
              </a>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${
                loading
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600"
              }`}
              disabled={loading}
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
