import React, { Component } from 'react';

const styles = {
  imageStyle: {
    height: 210,
    width: 220,
    border: '8px solid #343A40',
    borderRadius: '40%'
  }
}

class Card extends Component {

  render () {
    const props = this.props

    return (
      <img style={styles.imageStyle}
          className='click m-3 text-center bg-light text-center'
          key={props.id}
          src={props.src}
          alt={props.alt}
      /> 
    )
  }
}

export default Card;