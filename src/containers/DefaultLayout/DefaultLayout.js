import React, { Component, Suspense } from "react";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import "./Default.css";

import {
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";

//personal component imports
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import GraphChart from "../../components/GraphChart/GraphChart";
import TableHead from "../../components/TableHead/TableHead";
import MessageCont from "../../components/MessageCont/MessageCont";

// sidebar nav config
import navigation from "../../_nav";
// routes config

const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <MainHeader />
              <SubHeader />
              <LocalInfo />
              <GraphChart />
              <TableHead />
              <hr />
              <MessageCont />
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
