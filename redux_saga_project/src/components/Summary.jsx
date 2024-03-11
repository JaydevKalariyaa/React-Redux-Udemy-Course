import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import StatisticComponent from "./StatisticComponent";
import { useSelector } from "react-redux";

export default function Summary() {
  const income = useSelector((state) => state.budjet.totalIncome);
  const expense = useSelector((state) => state.budjet.totalExpense);
  return (
    <>
      <StatisticComponent
        size="small"
        label="BALANCE"
        value={income - expense}
      />
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <StatisticComponent
                size="tiny"
                color="green"
                label="Investment"
                value={income}
              />
            </Grid.Column>
            <Grid.Column>
              <StatisticComponent
                size="tiny"
                color="red"
                label="Expense"
                value={expense}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
