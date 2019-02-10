import React, { Component } from 'react';
// import Product from './components/Product';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize : 14
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  onSetColor(params){
    this.setState({
      color: params
    });
  }

  onChangeSize(value){
     //8 <= size <=36
     if(this.state.fontSize + value >= 8 && this.state.fontSize <= 36){
        this.setState({
          fontSize: this.state.fontSize + value
        })
     }
  }

  onSettingDefault(value){
      if(value){
         this.setState({
          color: 'red',
          fontSize : 14
         })
      }
  }
  

  render() {
    return (
      <div>
        <div className="container mt-50">
          <div className="row">
               <ColorPicker color={this.state.color} onReceiveColor= { this.onSetColor } />
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting 
                fontSize = {this.state.fontSize } 
                onChangeSize = {this.onChangeSize}
                />

                <Reset onSettingDefault = { this.onSettingDefault } />
              </div>
              <Result color = { this.state.color } fontSize = {this.state.fontSize}></Result>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
