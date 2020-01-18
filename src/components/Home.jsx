import React, { Component } from "react";
import { connect } from "react-redux";

import Item from "./Item";

class Home extends Component {
  render() {
    const { items, dispatch } = this.props;

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
          {items.map(item => (
            <Item item={item} key={item.id} dispatch={dispatch} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Home);
