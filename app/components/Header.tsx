import React from "react";
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
    <nav className="flex items-center justify-between px-5 py-0 text-gray-800 sm:my-0 lg:justify-start xl:my-0">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-around">
          <div className="flex">
            <NavLink
              to="/"
              end
              className={(props) => {
                return `${
                  props.isActive ? "text-indigo-500 " : "text-gray-600 "
                }inline-flex cursor-pointer items-center rounded bg-transparent px-2 py-1 text-center text-xl font-bold leading-5 lg:mr-6`;
              }}
            >
              My Blog
            </NavLink>
          </div>
          <div className="items-start text-gray-800 lg:flex">
            <NavLink
              to="/"
              end
              className={(props) => {
                return `${
                  props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-600 hover:text-gray-300 "
                }rounded-md px-3 py-2 text-sm font-medium`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(props) => {
                return `${
                  props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-600 hover:text-gray-300 "
                }rounded-md px-3 py-2 text-sm font-medium`;
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/posts"
              className={(props) => {
                return `${
                  props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-300 hover:text-white "
                }rounded-md px-3 py-2 text-sm font-medium`;
              }}
            >
              Posts
            </NavLink>
            <NavLink
              to="/contact"
              className={(props) => {
                return `${
                  props.isActive
                    ? "bg-gray-900 text-white "
                    : "text-gray-300 hover:text-white "
                }rounded-md px-3 py-2 text-sm font-medium`;
              }}
            >
              Contact
            </NavLink>
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
      </div>
    </nav>
  );
};

export default Header;
