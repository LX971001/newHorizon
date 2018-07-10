import { Radio, Input } from 'antd';
import React, { Component } from 'react';
import './Q&E.css';



const RadioGroup = Radio.Group;


class S3 extends Component {
  state = {
    value: 5,
    disabled: true,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  
  //var path={
  	//pathname:'/evaluation/test',
  	//state:value,
 // }
  //this.props.history.push(path);

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
    	<layout style={{ textAlign: "center"}}>
    <div style={{ marginTop: 70}} >
        <h1 className="head">请选择对应的题量
    </h1>
    </div>
    <div style={{ marginTop: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={5} className="radios">5题</Radio>
        <Radio style={radioStyle} value={10} disabled={this.state.disabled} className="radios">10题</Radio>
        <Radio style={radioStyle} value={15} disabled={this.state.disabled} className="radios">15题</Radio>
        
      </RadioGroup>
      </div>
      </layout>
    );
  }
}

export default S3;