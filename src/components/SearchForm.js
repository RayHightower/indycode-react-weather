import React, { Component } from "react";
import store from "../utils/store";
import { getWetherData } from "../utils/weatherApi";


export default class SearchForm


constructor (props);

super(props);
this.state = store.geetGlobalState():
this.updateState = ;


componentWillMount() {
  store.subscribe(this.updateState);
}

componentWillDisMount() {
  store.unsubscribe(this.updateState);
}

handleSearchChange(event) {
  store.upateGlobalState({searchTerm: event.target.value});
}

render() {
  return (
    <div>
    <input type="text" onChange={this.handleSearchChange} value={this.state.searchTerm}/>
    <button onClick={this.handleSearch}>Search</button>
    </div>
  )
}




