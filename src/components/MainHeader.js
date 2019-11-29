import React from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown,
  DropdownToggle,
  Button
} from "reactstrap";

import "./MainHeader.css";

export default function MainHeader() {
  return (
    <div className="header">
      <h4>Local Business</h4>
      <ul className="main-head">
        <li>
          <FormGroup row>
            <Col md="12">
              <InputGroup className="search">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText
                    className="hide"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      backgroundColor: "#f0f3f5"
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="search-input"
                  type="text"
                  id="input1-group1"
                  name="input1-group1"
                  placeholder="Search"
                  style={{ backgroundColor: "#f0f3f5" }}
                />
                <ButtonDropdown
                  className="hide"

                  //   isOpen={this.state.dropdownOpen[0]}
                  //   toggle={() => {
                  //     this.toggle(0);
                  //   }}
                >
                  <DropdownToggle
                    caret
                    style={{
                      background: "white",
                      border: "2px solid #f0f3f5",
                      height: "33px",
                      marginTop: "1px",
                      borderRadius: "0px",
                      marginLeft: "-20px",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                      backgroundColor: "#f0f3f5"
                    }}
                  ></DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </InputGroup>
            </Col>
          </FormGroup>
        </li>
        <li>
          <button class="btn btn-light btn-block">
            <i className="cui-cog "></i>
          </button>
        </li>
        <li>
          <ButtonDropdown
          // className="mr-1"
          // isOpen={this.state.dropdownOpen[12]}
          // toggle={() => {
          //   this.toggle(12);
          // }}
          >
            <Button id="caret" color="danger">
              <i className="fa fa-plus"></i>
            </Button>
            <DropdownToggle caret color="danger" />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action Disabled</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </li>
      </ul>
    </div>
  );
}
