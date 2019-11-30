import React from "react";

export default function HalfSide() {
  return (
    <div className="half-container">
      <h5 className="class-title">Site Manager</h5>
      <div className="dirc">
        <h6>Directories</h6>
        <ul>
          <li>
            <i className="fas fa-list-ul"></i>Journal
          </li>
          <li>
            <i className="fas fa-list-ul"></i>Local Buisness
          </li>
        </ul>
      </div>
      <div className="pages">
        <h6>Pages</h6>
        <ul>
          <li>
            <i class="far fa-sticky-note"></i>Home
          </li>
          <li>
            <i class="far fa-sticky-note"></i>About Us
          </li>
          <li>
            <i class="far fa-sticky-note"></i>Advertise with us
          </li>
          <li>
            <i class="far fa-sticky-note"></i>FAQ
          </li>
          <li>
            <i class="far fa-sticky-note"></i>Privacy
          </li>
          <li>
            <i class="far fa-sticky-note"></i>Terms of Use
          </li>
          <li>
            <i class="far fa-sticky-note"></i>Contact
          </li>
          <li>
            <i class="far fa-sticky-note"></i>Add Page
          </li>
        </ul>
      </div>
    </div>
  );
}
