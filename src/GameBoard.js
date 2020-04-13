import React, { Component } from 'react';
import './GameBoard.css'
export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    createBoard = () => {
        return [...Array(100)].map((e, i) => <div className="grid-item" key={i}>♦</div>)
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