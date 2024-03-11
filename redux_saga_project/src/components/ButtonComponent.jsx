import React from "react";
import { Button } from "semantic-ui-react";
export default function ButtonComponent({ value, color, type }) {
  return (
    <Button type={type} color={color}>
      {value}
    </Button>
  );
}
