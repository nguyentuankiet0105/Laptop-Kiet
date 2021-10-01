import { Link } from "react-router-dom";

export const ROUTES = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/login",
    breadcrumbName: "Login",
  },
];

export const itemRender = (route) => {
  return <Link to={route.path}>{route.breadcrumbName}</Link>;
};
