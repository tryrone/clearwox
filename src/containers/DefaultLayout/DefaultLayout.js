import React, { Component, Suspense } from "react";
import { Container } from "reactstrap";
import "./Default.css";

import { AppSidebar, AppHeader } from "@coreui/react";

//personal component imports
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";
import LocalInfo from "../../components/LocalInfo/LocalInfo";
import GraphChart from "../../components/GraphChart/GraphChart";
import TableHead from "../../components/TableHead/TableHead";
import MessageCont from "../../components/MessageCont/MessageCont";
import SideBar from "../../components/SideBar/SideBar";
import HalfSide from "../../components/HalfSide/HalfSide";

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
          <AppSidebar fixed display="lg" className="small-md">
            <SideBar />
            <HalfSide />
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
