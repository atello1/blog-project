import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/BlogDetail"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Blog listing
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}