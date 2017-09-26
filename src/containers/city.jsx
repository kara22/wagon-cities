import React, { Component } from 'react';
import { setActiveCity } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return(

      <li
        className="list-group-item"
        onClick={this.handleClick}
        >{this.props.city.name}</li>

    );
  }
}

function mapStateToProps(state) {
  return {
    setActiveCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      { setActiveCity },
      dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (City);
