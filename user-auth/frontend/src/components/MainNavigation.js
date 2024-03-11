import { NavLink, Form, useLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  const token = useLoaderData("root");
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
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token ? (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li>
              <Form action="/logout" method="post">
                <button
                  style={{
                    backgroundColor: "#242424",
                    border: "none",
                    color: "#fbd997",
                    fontSize: "16px",
                  }}
                >
                  Logout
                </button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
