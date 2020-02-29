import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
    render() {
        return (
        <div>
            <img className='Coin' src = {this.props.info.imgSrc} alt= {this.props.info.sides} />
        </div>
        )
    }
}

export default Coin;