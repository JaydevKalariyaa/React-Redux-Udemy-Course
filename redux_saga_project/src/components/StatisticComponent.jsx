import React from "react";
import { Segment, Statistic } from "semantic-ui-react";
export default function StatisticComponent({
  size,
  color = "black",
  label,
  value,
}) {
  return (
    <Segment textAlign="center">
      <Statistic size={size} color={color}>
        <Statistic.Label>{label}</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
      </Statistic>
    </Segment>
  );
}
