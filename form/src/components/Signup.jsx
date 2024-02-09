import { useState } from "react";

export default function Signup() {
  const [isformvalid, setIsformvalid] = useState({
    email: true,
    password: true,
    rePassword: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let frm = new FormData(event.target);
    const acquisitions = frm.getAll("acquisition");
    const data = Object.fromEntries(frm.entries());
    data.acquisition = acquisitions;
    console.log(data);
    validateData(data);
  };
  const validateData = (data) => {
    let emailIsValid = data.email.includes("@");
    let passwordIsValid =
      data.password.length === 8 &&
      data.password[0] === data.password[0].toUpperCase();
    let rePasswordIsValid = data.confirmPassword === data.password;
    setIsformvalid({
      email: emailIsValid,
      password: passwordIsValid,
      rePassword: rePasswordIsValid,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        {!isformvalid.email && (
          <p className="control-error">Enter valid email</p>
        )}
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
          {!isformvalid.password && (
            <p className="control-error">
              first letter should be capital & length should be 8
            </p>
          )}
        </div>

        <div className="control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirm-password" type="password" name="confirmPassword" />
          {!isformvalid.rePassword && (
            <p className="control-error">
              confirm password not matched with password
            </p>
          )}
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
