import { Radio, Input,Button } from 'antd';
import React, { Component } from 'react';
import './Q&E.css';



const RadioGroup = Radio.Group;
class Q1 extends Component {
  state = {
    value: null,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  onclick(){
  	
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
    	<layout style={{marginLeft: 50}}>
    <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第一题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
      </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第二题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第三题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第四题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第五题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第六题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第七题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第八题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第九题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第十题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
       </div>
      <div style={{textAlign:"center"}}>
      <Button type="primary" onClick={this.onClick} style={{marginTop:30}}>提交</Button>
      </div>
     
      </layout>
    );
  }
}

export default Q1;