// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

delayHander = (event) => {
  event.persist();
  setTimeout(() => {
    this.props.onDelayedClick(event);
 },  this.props.delay);
}

render(){
  return(
    <button
        onClick={this.delayHander}>
    </button>
  )
 }
}
