import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + num}))
  }

  isEvenOrOdd = () => {
    const {number} = this.state
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {number} = this.state

    const evenOrOdd = this.isEvenOrOdd()
    return (
      <div className="app-container">
        <div className="even-odd-container">
          <h1 className="count-value">Count {number}</h1>
          <p className="message">Count is {evenOrOdd}</p>
          <button onClick={this.onIncrement} type="button" className="button">
            Increment
          </button>
          <p className="condition">
            *Increment By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
