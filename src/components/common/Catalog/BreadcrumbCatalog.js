import React from "react";
import { Breadcrumb } from "antd";

const BreadcrumbCatalog = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Laptops</Breadcrumb.Item>
        <Breadcrumb.Item href="">Everyday Use Notebooks</Breadcrumb.Item>
        <Breadcrumb.Item href="">MSI Prestige Series</Breadcrumb.Item>
        <Breadcrumb.Item>MSI WS Series</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbCatalog;
