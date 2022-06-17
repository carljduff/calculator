import React from "react";
import "../css/frame.css";

import Buttons from "./Buttons";
const Frame = () => {
    return(
       <div className="frame">
            <div className="view">
            <h1 className="digits">123456789</h1>
            </div>
            <Buttons/>
        </div>
       
    )
}

export default Frame;