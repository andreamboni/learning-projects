import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
      {
        name: "André",
        job: "Developer",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state
  
    // Estamos criando uma nova lista aqui
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    );
  }
}

export default App;
