import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import ChangeText from './components/changeText.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <ChangeText />
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
