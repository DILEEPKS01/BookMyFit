
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const btnStyles = `hover:text-red text-white transition-colors duration-300 focus`;

function NavButtons({ onToggleNav }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-7">
        <button className={`3xl:hidden ${btnStyles}`} onClick={onToggleNav}>
          <FaBars className="h-6 w-6" />
        </button>
        <div className="focus hidden rounded-sm p-1.5 lg:block">
          <button
            onClick={() => setShowLogin(true)}
            className="flex items-center justify-between gap-2 text-sm font-bold uppercase text-white outline-none hover:text-red"
          >
            <FaUser className="h-6 w-6" />
            Login
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[350px] rounded-lg bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-600">Login</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border p-2 focus:border-red focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded border p-2 focus:border-red focus:outline-none"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="rounded bg-gray-300 px-4 py-2 text-white hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-red px-4 py-2 text-white hover:bg-red/90"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default NavButtons;
