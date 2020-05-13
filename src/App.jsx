import React, { Component } from "react";
import './App.css';
import Header from "./_components/header/Header.jsx";
import Table from './_components/_table/Table';
import {TBODY_DATA} from "./_components/_constant/characters";
import Form from "./_components/_table/Form";

class App extends Component {

  state={
    TBODY_DATA:TBODY_DATA
  }

  removeCharacter = index => {
    const { TBODY_DATA } = this.state
    this.setState({
      TBODY_DATA: TBODY_DATA.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ TBODY_DATA: [...this.state.TBODY_DATA, character] })
  }

  render() {
    const { TBODY_DATA } = this.state
    return (
      <div className="App">
          <h1>My First ReactApp</h1>
          <div className="container">
            <Table characterData={TBODY_DATA} removeCharacter={this.removeCharacter} editCharacter={this.editCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
          </div>
      </div>
    );
  }
}

export default App;
