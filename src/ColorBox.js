import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newValue = (parseFloat(this.props.opacity - 0.1).toFixed(1))
    console.log(newValue)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity < 0.2 ? null : (<div>
          <ColorBox opacity={newValue} />
        </div>)}
      </div>
    )
  }

}

