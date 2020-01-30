import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./pages/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Requerimento from "./pages/requerimento";
import Assunto from "./pages/assunto";
import Login from "./pages/login";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Layout>
            <Route path="/Requerimento" component={Requerimento} />
            <Route path="/Assunto" component={Assunto} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
