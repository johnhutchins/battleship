import React, { Component } from 'react';
import './GameBoard.css'
export default class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boats: []
        }
    }

    createGame = () => {
        //choose 3 random sets of 2,3,3,4
        let boats = []

    }

    checkHit = (e) => {
        console.log('e == ' + e.target.id)
        //if hit is in one of the num
    }

    createBoard = () => {
        return [...Array(100)].map((e, i) => <div className="grid-item" id={i} key={i} onClick={this.checkHit}>😈</div>)
    }

    render() {
        return (
            <div>
                <h1>BATTLESHIP</h1>
                <div className="grid-container">
                    {this.createBoard()}
                </div>
            </div>
        )
    }
}