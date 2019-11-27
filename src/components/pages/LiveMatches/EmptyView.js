import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

export default function EmptyView() {
  let history = useHistory();

  function handleClick() {
    history.push("/upcoming");
  }

  return (
    <Result
      className="EmptyView"
      title="Oops, looks like there are no live matches."
      extra={
        <Button type="primary" key="console" onClick={handleClick}>
          Go to upcoming matches
        </Button>
      }
    />
  );
}
