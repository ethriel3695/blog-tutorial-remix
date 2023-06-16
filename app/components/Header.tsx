import { NavLink } from "react-router-dom";

import { Button } from "./Button";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <NavLink
              to="/"
              end
              className={(props) => {
                return `${props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-600 hover:text-gray-300 "
                  }btn-ghost btn-circle btn`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(props) => {
                return `${props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-600 hover:text-gray-300 "
                  }btn-ghost btn-square btn`;
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/posts"
              className={(props) => {
                return `${props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-300 hover:text-white "
                  }btn-ghost btn-square btn`;
              }}
            >
              Posts
            </NavLink>
            <NavLink
              to="/contact"
              className={(props) => {
                return `${props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-300 hover:text-white "
                  }btn-ghost btn-square btn`;
              }}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink
          to="/"
          end
          className={(props) => {
            return `${props.isActive ? "text-indigo-500 " : "text-gray-600 "
              }btn-ghost btn text-xl normal-case`;
          }}
        >
          My Blog
        </NavLink>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
