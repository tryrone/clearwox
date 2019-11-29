import React, { Component } from "react";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import classNames from "classnames";
import "./SubHeader.css";

export default class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill("1"),
      active: true
    };
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray
    });
  }

  render() {
    var tabClass = classNames({
      "tab-active": this.state.active
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem className={tabClass}>
                <NavLink
                  active={this.state.activeTab[0] === "1"}
                  onClick={() => {
                    this.toggle(0, "1");
                  }}
                  style={{ border: "0" }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className={tabClass}>
                <NavLink
                  active={this.state.activeTab[0] === "2"}
                  onClick={() => {
                    this.toggle(0, "2");
                  }}
                  className="tab-active"
                  style={{ border: "0" }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem className={tabClass}>
                <NavLink
                  active={this.state.activeTab[0] === "3"}
                  onClick={() => {
                    this.toggle(0, "3");
                  }}
                  style={{ border: "0" }}
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}
