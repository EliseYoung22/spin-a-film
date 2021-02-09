import React, { Component } from 'react';
import axios from 'axios';
import Wheel from './Components/Wheel';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.places = ["Fantastic Beasts And Where To Find Them", "Beauty And The Beast", "The Fault In Our Stars", "Maleficent", "Fantastic Beasts: The Crimes Of Grindelwald"];
  }

  componentDidMount() {
    this.getCardData();
  }

  async getCardData() {
    const results = await axios.get(process.env.REACT_APP_BASE_URL + '/movies').then(data => { return data});
    this.places = results.data;
  }

  async refreshMovies() {
    const results = await axios.get("http://localhost:3000/movies").then(data => { return data});
    // return results.data
    console.log(results.data)
    this.places = results.data;
  }

  render() {
    return (
      <div className="App">
        {/* <h1>What should you eat today?</h1> */}
        <Wheel items={this.places} />
        <button onClick={this.refreshMovies}>Refresh Movies</button>
      </div>
    );
  }
}

export default App;
