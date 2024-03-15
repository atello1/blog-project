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
          {<li>
            <NavLink
              to="/NewPost"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New post
            </NavLink>
          </li> }
        </ul>
      </nav>
    </header>
  );
}
