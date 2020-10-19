import React, { Component } from 'react'
import Membre from './Components/Membres'
import Button from './Components/Button'
import ButtonShow from './Components/Button'
import './App.css'


const famille = {
  membre1: {
    nom: 'Anthony',
    Age: 2
  },
  membre2: {
    nom: 'Fred',
    Age: 20
  },
  membre3: {
    nom: 'Jérôme',
    Age: 34
  },
  membre4: {
    nom: 'Papy',
    Age: 80
  }
}
class App extends Component {
  state = {
    famille,
    isShow: false
  }
  handleClick = num => {
    //étatpe 1: copie de mon state 
    const famille = { ... this.state.famille }
    //étape 2: j'applique la fonction
    famille.membre1.Age += num
    //étape 3 : je mets à jour le state
    this.setState({ famille })
  }

  handleChange = event => {
    //étatpe 1: copie de mon state 
    const famille = { ... this.state.famille }
    const nom = event.target.value
    console.log(nom)
    famille.membre1.nom = nom
    this.setState({ famille })
  }

  handleChangeAge = event => {
    //étatpe 1: copie de mon state 
    const famille = { ... this.state.famille }
    const Age = event.target.value
    famille.membre1.Age = Age
    this.setState({ famille })
  }


  handleChange2 = event => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille.membre2.nom = nom
    this.setState({ famille })
  }
  handleChangeAge2 = event => {
    const famille = { ...this.state.famille }
    const Age = event.target.value
    famille.membre2.Age = Age
    this.setState({ famille })
  }
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    //mis à jour du state
    this.setState({ isShow })
  }

  // une methode render qui retourne qq chose
  render() {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null
    if (isShow) {
      description = <strong>"Je suis un chien"</strong>
    }

    return (
      <div className='App'>
        <h1>{titre}</h1>

        <p>Officia amet quis incididunt et amet fugiat pariatur.</p>
        <input type='text' />
        <Membre
          nom={famille.membre1.nom}
          age={famille.membre1.Age}
          auteur='test' />
        <input value={famille.membre1.nom} onChange={this.handleChange} type='text' style={{ margin: '5px' }} />
        <input value={famille.membre1.Age} onChange={this.handleChangeAge} type='text' />
        <Membre
          nom={famille.membre2.nom}
          age={famille.membre2.Age}
          auteur='test' />
        <input value={famille.membre2.nom} onChange={this.handleChange2} type='text' style={{ margin: '5px' }} />
        <input value={famille.membre2.Age} onChange={this.handleChangeAge2} type='text' />
        <Membre
          nom={famille.membre3.nom}
          age={famille.membre3.Age}
          auteur='test' />
        <Membre
          nom={famille.membre4.nom}
          age={famille.membre4.Age}
          auteur='test' />
        {/* On ne peut pas faire de condition classique à cause des accolades */}
        {/* quand un élément est null il n'est pas rendu */}
        {description}

        <button onClick={this.handleShowDescription}>{
          isShow ? 'Cacher' : 'Montrer'
        }
        </button>


        
        <Button
          vieillir={() => this.handleClick(2)}
        />
      </div>
    )
  }
}

export default App
