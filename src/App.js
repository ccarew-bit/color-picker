import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'

class App extends Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    light: Math.round(Math.random() * 100),
    value: Math.round(Math.random() * 100),
  }
  changeHue = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
  }
  changeSaturation = e => {
    this.setState({
      saturation: e.target.value,
    })
  }
  changeLight = e => {
    this.setState({
      light: e.target.value,
    })
  }
  render() {
    const newColor =
      'hsl (${this.state.hue}, ${this.state.saturation}%, ${this.state.light}%)'
    console.log(newColor)
    return (
      <>
        <Header />
        <section>
          {/* <section class = "slidecontainer" style {{backgroundColor : newColor}}> */}
          <ul>
            <li className="H">
              <h1>h</h1>
              <input
                type="range"
                min="1"
                max="360"
                class="slider"
                onInput={this.changeHue}
                value={this.state.hue}
              />
            </li>
            <li className="S">
              <h1>s</h1>
              <input
                type="range"
                min="1"
                max="100"
                class="slider"
                onInput={this.changeSaturation}
                value={this.state.saturation}
              />
            </li>
            <li className="L">
              <h1>l</h1>
              <input
                type="range"
                min="1"
                max="100"
                onInput={this.changeLight}
                value={this.state.light}
              />
            </li>
          </ul>
        </section>
      </>
    )
  }
}

export default App
