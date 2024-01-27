import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col bg items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-4xl mb-4">Welcome to Our FastServer!</h1>
      <p className="text-xl mb-8">Revolution</p>
      <Link
        to="login"
        className="bg-white text-blue-500 px-4 py-2 rounded font-bold text-xl"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Home;
