import React, { Component } from 'react'
import Button from './Button'
import './app.css'
import './'
class App extends Component {
  render() {
    const a = 7
    const title = 'React'
    console.log(a)
    return (
      <div className="wrap">
        <div>
          <div className="app" title={title} style={{ color: '#ccc' }}>
            {' '}
            hello world {a}{' '}
          </div>
          <Button />
        </div>
      </div>
    )
  }
}

export default App
