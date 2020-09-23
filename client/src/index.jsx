import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 0
    }
  }

  render() {
    return <div>Hello React</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));