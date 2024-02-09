import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Result = ({ input }) => {
  let result = calculateInvestmentResults(input);
  console.log(result);
  return (
    <>
      <table id="result" className="center">
        <thead>
          <tr>
            <th>annualInvestment</th>
            <th>interest</th>
            <th>valueEndOfYear</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => (
            <tr>
              <td>{data.annualInvestment}</td>
              <td>{data.interest}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{data.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Result;
