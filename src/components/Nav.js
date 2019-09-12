import React, { Component } from 'react'

class Nav extends Component {
  
  render() {
    const props = this.props

    return (
      <div className='row py-3 bg-dark text-light'>
        <div className='offset-lg-1 col-lg-5 text-left'>
        <p>A Memory Game</p>
        <p>Click Each Picture Once!</p>
          <h1>Don't Click Twice!</h1>
        </div>
        <div className='col-lg-5 text-right'>
          <h2>Score: <strong>{props.currentScore}</strong></h2>
          <h2>Best Score: <strong>{props.topScore}</strong></h2>  
        </div>
      </div>
    )
  }
}

export default Nav;