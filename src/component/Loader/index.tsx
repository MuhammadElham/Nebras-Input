import React, { Component } from "react";
import style from "@/index.module.scss";

class Loader extends Component {
  render() {
    return (
      <div className={style.loaderContainer}>
        {/* Logo Container */}
        <div className={style.imgContainer}>
          <img className={style.img} src="https://www.nebrascorp.com/favicon/apple-touch-icon.png" alt="Loading..." />
        </div>
        {/* Animation */}
        <div className={style.animation}></div>
      </div>
    );
  }
}

export default Loader;
