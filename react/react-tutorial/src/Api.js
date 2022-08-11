import React, { Component } from 'react'

class App extends Component {
  state = {
    flight: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'http://localhost:8080/flight'

    fetch(url)
      .then((result) => result.json())
      .then((flight) => console.log(flight))
  }

  render() {
    const { flight } = this.state

    return (<div>{flight}</div>)
  }
}

export default App