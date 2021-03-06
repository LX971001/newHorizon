import { Radio, Input } from 'antd';
import React, { Component } from 'react';
import './Q&E.css';



const RadioGroup = Radio.Group;


class S2 extends Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
    	<layout style={{ textAlign: "center"}}>
    <div style={{ marginTop: 70}} >
        <h1 className="head">请选择评测的知识点
    </h1>
    </div>
    <div style={{ marginTop: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">基础知识</Radio>
        <Radio style={radioStyle} value={2} className="radios">阅读</Radio>
        <Radio style={radioStyle} value={3} className="radios">写作</Radio>
        
      </RadioGroup>
      </div>
      </layout>
    );
  }
}

export default S2;