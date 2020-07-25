import React from "react";

const Home = React.lazy(() => import("./Components/Home/index"));
const Details = React.lazy(() => import("./Components/Details/index"));
const CheckOut = React.lazy(() =>
  import("./Components/Payment/Checkout/index")
);
const AddDetail = React.lazy(() =>
  import("./Components/Payment/AddDetail/index")
);
const routes = [
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: Home
  },
  {
    path: "/details",
    exact: true,
    name: "Details",
    component: Details
  },
  {
    path: "/checkout",
    exact: true,
    name: "CheckOut",
    component: CheckOut
  },
  {
    path: "/add-details",
    exact: true,
    name: "AddDetail",
    component: AddDetail
  }
];
export default routes;
