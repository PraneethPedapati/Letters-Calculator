import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  getWordCount = event => {
    const letterCount = event.target.value.length
    this.setState({count: letterCount})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label htmlFor="text-input" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="text-input"
              className="input"
              onChange={this.getWordCount}
            />
          </div>
          <p className="letter-count">No.of letters: {count}</p>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calc-image"
        />
      </div>
    )
  }
}

export default LettersCalculator
