import { NavLink } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";

type User = {
  name: string;
};

export type HeaderProps = {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
};

const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <nav
      className="navbar bg-base-100"
      style={{ borderBottom: "1px solid hsla(203, 50%, 30%, 0.15)" }}
    >
      <div className="navbar-start">
        <NavDropdown />
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">Enhanced</a>
      </div>
      <div className="navbar-end">
        <button className="btn-ghost btn-circle btn">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src="/avatarPlaceholder.jpeg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
