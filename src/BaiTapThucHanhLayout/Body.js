import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <section className="pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
