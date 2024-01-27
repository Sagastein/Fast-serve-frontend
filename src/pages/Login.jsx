import { useEffect, useState } from "react";
import ImageLogin from "../assets/login.webp";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/admin");
    }
  }, [navigate, isAuthenticated]);
  const handleSubmit = () => {
    const options = {
      method: "POST",
      url: "https://fastserve.onrender.com/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email: email, password: password },
    };
    axios
      .request(options)
      .then(function (response) {
        signIn({
          auth: {
            token: response.data.token,
            type: "Bearer",
          },
          userState: response.data.user,
        });
        return navigate("/admin");
      })
      .catch(function (error) {
        alert(error.response.data.error);
      });
  };
  return (
    <main className="grid h-[95dvh] md:grid-cols-2">
      <aside className="hidden md:block">
        <img src={ImageLogin} alt="login" className="object-cover h-full" />
      </aside>
      <aside className="grid border  items-center justify-center">
        <section className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Login</h1>

          <label className="block mb-2">
            <span>Email:</span>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border p-2 w-full rounded"
            />
          </label>

          <label className="block mb-2">
            <span>Password:</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
              value={password}
            />
          </label>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Login
          </button>
        </section>
      </aside>
    </main>
  );
}

export default Login;
