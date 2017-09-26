import React, { Component } from 'react';


export default class City extends Component {

  render() {
    return(

      <li className="list-group-item">{this.props.city.name}</li>

    );
  }
}
