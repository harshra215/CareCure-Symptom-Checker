import React, { Component } from "react";
import "./DHIlab.css";
class DHIlabLogo extends Component {
    render() {
        return (<React.Fragment>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  {/* <!-- Background Circle --> */}
  <circle cx="50" cy="50" r="50" fill="#4caf50" />
  
  {/* <!-- Medical Cross --> */}
  <g fill="#fff">
    <rect x="28" y="40" width="44" height="20" />
    <rect x="40" y="28" width="20" height="44" />
  </g>
  
  {/* <!-- Heart Icon inside the Cross --> */}
  <path
    d="M50 62s12-6 12-14c0-5-4-9-9-9-4 0-7 3-9 5-2-2-5-5-9-5-5 0-9 4-9 9 0 8 12 14 12 14z"
    fill="#fff"
  />
  
  {/* <!-- Slogan --> */}
  <text x="50%" y="90%" font-size="10" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif">
    Health First
  </text>
</svg>




        {/* <div> */}
        {/* </div> */}
      </React.Fragment>);
    }
}
export default DHIlabLogo;