import React from "react";
import "./DropDown.css";

export default function DropDown() {
  return (
    <div className="dropdown">
      <button className="edit">
        {" "}
        <p>
          <i className="fa fa-pencil-square-o"></i>
        </p>
      </button>
      <button className="dropbtn">
        {" "}
        <p>...</p>
      </button>

      <div className="dropdown-content">
        <a href="ldj">
          <i className="far fa-image"></i> &nbsp;Photos/Videos
        </a>
        <a href="dkc">
          <i class="fas fa-box"></i> &nbsp;Products
        </a>
        <a href="dc">
          <i class="fas fa-tools"></i> &nbsp;Services
        </a>
        <a href="dc">
          <i class="fas fa-cut"></i> &nbsp;Coupons
        </a>
        <a href="dc">
          <i class="far fa-comment-alt"></i> &nbsp;User Reviews
        </a>
        <a href="dc">
          <i class="fas fa-comment-dollar"></i>&nbsp;Subscription
        </a>
        <a href="dc">
          <i class="fas fa-chart-line"></i>&nbsp;Stats
        </a>
        <a href="dc" className="last">
          <i class="far fa-trash-alt"></i> &nbsp;Delete Business
        </a>
      </div>
    </div>
  );
}
