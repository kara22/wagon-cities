import React, { Component } from 'react';
import { connect } from 'react-redux';




class ActiveCity extends Component {

  render(){
    if (this.props.city) {
      return(
        <div className="active-city">
          <h3>{this.props.city.name}</h3>
          <p>{this.props.city.address}</p>
        </div>
      );
    } else {
      return <div className="active-city">No city selected yet</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    city: state.activeCity
  };
}


export default connect(mapStateToProps) (ActiveCity);
