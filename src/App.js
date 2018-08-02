import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  state = {
    dinosaurs: []
  }

  componentDidMount() {
    fetch('./dinosaurs.json')
      .then(data => data.json())
      .then(dataJSON => {
        this.setState({ dinosaurs: dataJSON })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main dinosaurs={this.state.dinosaurs}/>
        <Footer />
      </div>
    );
  }
}

export default App;
