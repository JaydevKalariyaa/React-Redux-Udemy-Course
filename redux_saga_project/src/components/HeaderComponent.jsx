import React from "react";
import { Header } from "semantic-ui-react";
export default function HeaderComponent({ value, size }) {
  return <Header as={size}>{value}</Header>;
}
