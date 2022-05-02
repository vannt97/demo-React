import React, { Component } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default class BaiTapThucHanhLayOut extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}
