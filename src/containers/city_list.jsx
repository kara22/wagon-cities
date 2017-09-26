import React, { Component } from 'react';
import City from './city';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {

    const cityItems = this.props.cities.map((city) => {
      return <City city={city} key={city.name}/>
    });

    return(
      <ul>
        {cityItems}
      </ul>

    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);
