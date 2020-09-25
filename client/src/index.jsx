import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>Hello React</div>;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>Hello React</div>;
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));
