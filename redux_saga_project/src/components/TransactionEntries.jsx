import React, { useEffect } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import Line from "./Line";
import { useSelector } from "react-redux";

export default function TransactionEntries() {
  const entries = useSelector((state) => state.budjet.entries);

  return (
    <>
      {entries?.map((entry) => (
        <Line
          key={entry.id}
          id={entry.id}
          isExpense={entry.isExpense}
          description={entry.description}
          amount={entry.amount}
        ></Line>
      ))}
    </>
  );
}
