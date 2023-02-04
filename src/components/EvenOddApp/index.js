// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClick1 = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(PrevState => ({isEven: PrevState.isEven + randomNumber}))
  }

  render() {
    const {isEven} = this.state
    const evenOrOdd = isEven % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="column">
          <h1 className="head">Count {isEven}</h1>
          <p className="para">Count is {evenOrOdd}</p>
          <button type="button" className="button" onClick={this.onClick1}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
