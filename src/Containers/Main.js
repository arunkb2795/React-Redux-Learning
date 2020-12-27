import React, { Component } from "react";
import { connect } from "react-redux";
import { setName } from "../Redux/Actions/userActions";
class Main extends Component {
  handleClick = () => {
    this.props.setName("Luke");
  };
  render() {
    return (
      <div>
        Hello Main : - {this.props.user.name}
        <button onClick={this.handleClick}>ChangeName</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
