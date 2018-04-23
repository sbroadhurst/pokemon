import React, { Component } from 'react'
import Routes from './routes/index'
import pokemon_wallpaper3 from './pokemon_wallpaper3.png'

class App extends Component {
  render() {
    return (
      <div
        className="app"
        style={{ backgroundImage: 'url(' + pokemon_wallpaper3 + ')' }}
      >
        <Routes />
      </div>
    )
  }
}
export default App
