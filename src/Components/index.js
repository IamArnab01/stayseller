import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import Loader from "./Loader/index";
import Aux from "../hoc/Aux";
import routes from "../routes";
import Header from "./Layout/Header/index";
import Footer from "./Layout/Footer/index";

const Home = Loadable({
  loader: () => import("../Components/Home/index"),
  loading: Loader
});

class App extends Component {
  render() {
    const menu = routes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => <route.component {...props} />}
        />
      ) : null;
    });

    return (
      <Aux>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            {menu}
            <Route path={["/home", "/"]} component={Home} />
          </Switch>
        </Suspense>
        <Footer />
      </Aux>
    );
  }
}

export default App;
