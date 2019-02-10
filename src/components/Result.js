import React, { Component } from 'react';
class Result extends Component {
  setColor(){
      return {
        color: this.props.color,
        borderColor: this.props.color,
        fontSize: this.props.fontSize
      }
  }
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>Color: {this.props.color}  - Fontsize : {this.props.fontSize} px </p>
                    <div className="content" style={this.setColor()}>
                    Nôị dung setting
                    </div>
                </div>  
        </div>
    );
  }
}

export default Result;
