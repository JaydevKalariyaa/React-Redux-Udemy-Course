import Header from "./components/Header.jsx";
import { UserInput } from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInput = (key, value) => {
    setuserInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput handleInput={handleInput} input={userInput} />
      <Result input={userInput} />
    </>
  );
}

export default App;
