// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

mouseHandler = (event) => {
  this.props.onReceiveCoordinates([event.clientX, event.clientY])
}

  render(){
    return(
        <button>
            onClick={this.mouseHandler}
        </button>
    )
  }
}
