import React from "react";
import SideNav, { NavItem, NavIcon } from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div>
      <SideNav
        onSelect={selected => {
          // Add your code here
        }}
        className="side-color"
      >
        <SideNav.Toggle />
        <SideNav.Nav
          defaultSelected="home"
          style={{ color: "rgb(37, 37, 37)" }}
        >
          <NavItem>
            <NavIcon className="black">
              <i
                className="fas fa-clipboard focus"
                style={{ fontSize: "1.45em", color: "rgb(37, 37, 37)" }}
              />
            </NavIcon>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon className="black">
              <i
                className="far fa-comment-alt focus"
                style={{ fontSize: "1.45em", color: "rgb(37, 37, 37)" }}
              />
            </NavIcon>
            {/* <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem> */}
          </NavItem>
          <NavItem>
            <NavIcon className="black">
              <i
                className="far fa-chart-bar focus"
                style={{ fontSize: "1.45em", color: "rgb(37, 37, 37)" }}
              />
            </NavIcon>
          </NavItem>
          <NavItem>
            <NavIcon className="black">
              <i
                className="fas fa-cog focus"
                style={{ fontSize: "1.45em", color: "rgb(37, 37, 37)" }}
              />
            </NavIcon>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
