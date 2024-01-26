import React, { useState } from "react";

function Login() {
  return (
    <form className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <label className="block mb-2">
        <span>Username:</span>
        <input type="text" className="border p-2 w-full rounded" />
      </label>

      <label className="block mb-2">
        <span>Password:</span>
        <input type="password" className="border p-2 w-full rounded" />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
