import React, { Component } from 'react';
import images from './images'; // array of image objects
import './App.css'; // default styling
import Card from './components/Cards'; // sends images to DOM
import Nav from './components/Nav'; //

class App extends Component {

  state = {
    images,
    currentScore: 0,
    topScore: 0,
    chosenCards: []
  };
 
  // note fron a friend  to use https://javascript.info/task/shuffle
  shuffleCards = (images) => {
      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [images[i], images[j]] = [images[j], images[i]];
      }
  }

  gameSimulator (choice, array) {

    // lose scenario
    if (array.includes(choice)) {
      alert('You lose, please try again.')

      // check/set state top score
      if (this.state.currentScore > this.state.topScore) {
        this.setState({
          topScore: this.state.currentScore
        })
      }
      // reset state
      this.setState({
        currentScore: 0,
        chosenCards: []
      })
      // reset cards
      this.shuffleCards(images)

    // game continuation
    } else {

      // iterate score
      let score = this.state.currentScore + 1
      this.setState({
        currentScore: score
      })
      // add card to array
      array.push(choice);
      console.log(`User Choice: ${choice}`);
      console.log(`Chosen Cards: ${array}`);
      // shuffle all cards
      this.shuffleCards(images)
      
      // check score within game continuation
      if (score === 9) {
        alert("You win! Try to do it again.")
        // reset state
        this.setState({
          currentScore: 0,
          topScore: 9,
          chosenCards: []
        })
        // shuffle all cards
        this.shuffleCards(images)
      }
    }
  }

  handleImageClick = event => {
    event.preventDefault();
    
    let userSelection = event.target.alt;
    let chosenCards = this.state.chosenCards
    this.gameSimulator(userSelection,chosenCards);
  };


  render () {

    const style = {
      backgroundStyle: {
        backgroundImage: 'url(https://i.pinimg.com/originals/13/a0/75/13a075b4cc0d6668941324e426209b9a.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    };

    return (
    <div style={style.backgroundStyle}>
      <Nav 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
      />
        <div className='container' key='mainContainer' >
          <div className='row' key='imageRow'>
              {
                this.state.images.map(image => (
                  <a 
                    href='/' 
                    onClick={this.handleImageClick} 
                    key={image.id}
                    className='col-lg-4 text-center'
                  >
                    <Card
                      key={image.id}
                      id={image.id}
                      src={image.image}
                      alt={image.name}
                    />      
                  </a>
                ))
              }

          </div>
        </div>
      </div>
    );
  }

}

export default App;