import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import React from 'react';
import { render } from 'react-dom';
import Mark from 'react-marked';

class ChangeText extends React.Component {
  constructor(){
    super()
    this.state={
      markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    }
  }
  updateValue(event){
    let newMarkdown = event.target.value
    this.setState({
      markdown: newMarkdown
    })
  }

  rawMarkUp(text){
    Mark.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    let rawhtml = Mark(text);
    console.log({__html: rawhtml});
    return {__html: rawhtml}
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h4>Write your text here and see the mark down -></h4>
             <textarea  className="form-control" width='300' ref="textarea" value={this.state.markdown} onChange={this.updateValue.bind(this)}/>
          </div>
          <div className="col-md-6">
             <h4>Markdown Result</h4>
            {/* <div dangerouslySetInnerHTML={this.rawMarkUp(this.state.markdown)}></div> */}
            <span dangerouslySetInnerHTML={this.rawMarkUp(this.state.markdown)}></span>

          </div>
        </div>
      </div>
    )
  }
}

export default ChangeText;
