import React from 'react';
import './App.css';

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      charCount: 0
    }
  }

  async handleSubmit(event) {
    const text = document.querySelector('#char-input').value
    const res = await fetch(`char_count?text=${text}`, {
        headers: headers
      })
      const testJson = await res.json()
      this.setState({ charCount: testJson['count']});
  }

  render(){
    return (
      <div className="App">
        <div>
          <label htmlFor='char-input'>How many characters does</label>
          <input id='char-input' type='text' />
          <button onClick={() => this.handleSubmit()}>have?</button>
        </div>
  
        <div>
          {this.state.charCount > 0 ? <h1>{this.state.charCount} characters long!</h1> : <h1></h1>}
        </div>
      </div>
    );
  }
}

export default App;
