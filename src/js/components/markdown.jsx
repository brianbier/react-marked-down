import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import marked from 'marked';

class Markdown extends React.Component {
  constructor(){
    super()
    this.state={
      markdown: ''
    }
  }
  render() {
    console.log(marked('I am using __markdown__.'));
    return (
      <div>
        <h1>It Works!</h1>
         <textarea name="description" value="This is a description." />
      </div>
    )
  }
}

export default Markdown;
