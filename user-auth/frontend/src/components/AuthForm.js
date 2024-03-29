import {
  Form,
  NavLink,
  useActionData,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";
import { useNavigation } from "react-router-dom";

function AuthForm() {
  const [searchParams] = useSearchParams();
  let navigation = useNavigation();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmiiting = navigation.state === "submitting";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <NavLink to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </NavLink>
          <button disabled={isSubmiiting}>
            {isSubmiiting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
