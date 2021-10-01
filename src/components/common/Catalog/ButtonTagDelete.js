import React from "react";
import { Row, Button } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const ButtonTagDelete = (props) => {
  return (
    <>
      <Row className="Wrap-btnTag" style={{ padding: "5px 0" }}>
        <Button>
          <b>{props.title}</b>{" "}
          <span style={{ color: "#A2A6B0" }}>({props.number})</span>{" "}
          <CloseCircleFilled
            style={{ fontSize: "16px", color: "rgba(201, 77, 63, 1)" }}
          />
        </Button>
      </Row>
    </>
  );
};

export default ButtonTagDelete;
