import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import { CmsDriven } from "@cmsdriven/react";
import NonCmsPage from "./components/nonCmsPage";
// eslint-disable-next-line
import Footer from "./components/Footer";

import AppBar from "@material-ui/core/AppBar";
import StoreIcon from "@material-ui/icons/Store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <StoreIcon />
            <Typography variant="h6" color="inherit" noWrap>
              Elegant Store
            </Typography>

            <NavLink
              exact={true}
              style={{
                color: "#fafafa",
                backgroundColor: "#23328e",
                padding: "10px",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "400",
                borderRadius: "10px",
                margin: "20px"
              }}
              to="/store"
            >
              cmsdriven page
            </NavLink>

            <NavLink exact={true} style={{
              color: "white", textDecoration: "none",
            }} to="/non-cms">
              without cms page
            </NavLink>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={NonCmsPage} />
          <Route path="/non-cms" exact component={NonCmsPage} />
          <Route
            exact
            path="*"
            component={() => (
              <CmsDriven accessToken={process.env.REACT_APP_CMSDRIVEN_API} />
            )}
          />
        </Switch>
        {/* <Footer></Footer> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
