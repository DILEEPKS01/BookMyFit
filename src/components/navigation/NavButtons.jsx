import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaUser, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "../../images/logo/l4.png"; // Adjust path if needed

const btnStyles =
  "hover:text-red text-white transition-colors duration-300 focus";

function NavButtons({ onToggleNav }) {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex items-center justify-between gap-7">
      <button className={`3xl:hidden ${btnStyles}`} onClick={onToggleNav}>
        <FaBars className="h-6 w-6" />
      </button>

      <Link to="/" className={btnStyles}></Link>
      <button className={btnStyles}></button>

      <div className="focus hidden rounded-sm border-2 border-solid border-gray-350 p-1.5 lg:block">
        <button
          onClick={toggleLoginModal}
          className="mr-2 flex items-center justify-between gap-2 text-sm font-bold uppercase text-white outline-none"
        >
          <FaUser className="h-8 w-8 rounded-full bg-red p-2 text-white" />
          Login
        </button>
      </div>

      {showLogin && (
        <div className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <img
                src={logo}
                alt="BookMyFit Logo"
                className="h-12 object-contain"
              />
            </div>

            <h2 className="text-gray-800 mb-4 text-center text-xl font-bold">
              Login
            </h2>

            <form>
              <input
                type="email"
                placeholder="Email"
                className="mb-3 w-full rounded border border-gray-300 p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded border border-gray-300 p-2"
              />
              <div className="mb-4 mt-1 text-right">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-red px-4 py-2 font-semibold text-white"
              >
                Submit
              </button>
            </form>

            {/* Social Media Section */}
            <div className="my-4 text-center text-sm text-gray-500">
              or login with
            </div>
            <div className="mb-4 flex justify-center gap-4 text-xl text-gray-600">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaGoogle className="hover:text-red-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </div>

            <button
              onClick={toggleLoginModal}
              className="mt-2 block w-full text-sm text-red hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavButtons;
