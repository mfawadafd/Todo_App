import React, { useState } from 'react'
export default function LudoGame() {
    let [Moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 })
    let [arr, setArr] = useState(["No move"])
    let updateBlue = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue = Math.floor(Math.random() * 6) + 1 }
        });

        setArr(() => {
            return [...arr, "Blue moves"]
        });
        console.log(arr);
    }
    let updateyellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow = Math.floor(Math.random() * 6) + 1 }
        });
        setArr(() => {
            return [...arr, "Yellow moves"]
        });
    }
    let updategreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green = Math.floor(Math.random() * 6) + 1 }
        });
        setArr(() => {
            return [...arr, "Green moves"]
        });
    }
    let updatered = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red = Math.floor(Math.random() * 6) + 1 }
        });
        setArr(() => {
            return [...arr, "Red moves"]
        });
    }
    return (
        <div >
            <h1>Ludo Game</h1>
            <p>Current Move: {arr}</p>
            <div className="board">
                <p>Blue Moves ={Moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow Moves ={Moves.yellow} </p>
                <button style={{ backgroundColor: "yellow" }} onClick={updateyellow}>+1</button>
                <p>Green Moves ={Moves.green} </p>
                <button style={{ backgroundColor: "green" }} onClick={updategreen}>+1</button>
                <p>Red Moves = {Moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updatered}>+1</button>
            </div>
        </div>
    )
}