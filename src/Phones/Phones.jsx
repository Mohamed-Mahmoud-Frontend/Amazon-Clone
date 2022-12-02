import React from "react";
import "./Phones.css";
import {Link} from 'react-router-dom'
function Phones(props) {
  return (
    <div className="proud-header">
      <div className="proud-body">
        <img src={props.images} alt="" />
      </div>
      <div></div>
      <div>
        <h2 > {props.title}</h2>
      </div>
      <p>⭐⭐⭐⭐</p>
      <div style={{ display: "flex", fontSize: "18PX" }}>
        <sub>EGP</sub>
        <span>
          <b style={{ fontSize: "28px", fontFamily: "sans-serif" }}>
            {props.span}
          </b>{" "}
        </span>
        <sub>00</sub>
      </div>
      <div>
        <span>20% discount for VF Cash. Use code VFWF20</span>
        <br />
        <span>
          Get it <b>Saturday, December 3 - Monday, December 5</b>
        </span>
        <br />
        <span>EGP 21.00 shipping</span>
      </div> 
      <div className="proud-footer">
        <Link to="#">Add Card</Link>
      </div>
    </div>
  );
}
export default Phones;
