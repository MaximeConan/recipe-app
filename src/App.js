import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import recettes from './recettes'

// Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  // Synchornisation du state à Firebase
  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  // Fermer la connexion entre le state et Firebase lorsque l'on change de pseudo
  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  chargerExemple = () => this.setState({ recettes })

  render () {
    const cards = Object
      .keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]} />)

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        {cards}
        <Admin
          chargerExemple={this.chargerExemple} />
      </div>
    )
  }
}

export default App
