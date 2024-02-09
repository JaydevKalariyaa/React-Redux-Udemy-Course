import React from "react";

export const UserInput = ({ handleInput, input }) => {
  return (
    <div>
      <form id="user-input">
        <p className="input-group">
          <label htmlFor="input">initial Investment</label>
          <input
            type="number"
            value={input.initialInvestment}
            onChange={(e) => handleInput("initialInvestment", e.target.value)}
          />
        </p>
        <p className="input-group">
          <label htmlFor="input">annual Investment</label>
          <input
            type="number"
            value={input.annualInvestment}
            onChange={(e) => handleInput("annualInvestment", e.target.value)}
          />
        </p>
        <p className="input-group">
          <label htmlFor="input">expected Return</label>
          <input
            type="number"
            value={input.expectedReturn}
            onChange={(e) => handleInput("expectedReturn", e.target.value)}
          />
        </p>
        <p className="input-group">
          <label htmlFor="input">duration</label>
          <input
            type="number"
            value={input.duration}
            onChange={(e) => handleInput("duration", e.target.value)}
          />
        </p>
      </form>
    </div>
  );
};
