import { Radio, Input,Button } from 'antd';
import React, { Component } from 'react';
import './Q&E.css'
import { queryExams } from './server'
import axios from 'axios'
import BasicRouter from './Router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const RadioGroup = Radio.Group;
class Q2 extends Component {
	state = {
		exam:[]
	}
  	componentDidMount() {
    var that = this;
    that.getJsonData();
   }
	
	getJsonData = () => {
    queryExams().then(res => {
      this.setState({exam:res})
      console.log(res)
    });
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
        <h1 >第一题:{this.state.exam.title}
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1} className="radios">A.{this.state.exam.body}</Radio>
        <Radio style={radioStyle} value={2} className="radios">B.{this.state.exam.body}</Radio>
        <Radio style={radioStyle} value={3} className="radios">C.{this.state.exam.body}</Radio>
        <Radio style={radioStyle} value={4} className="radios">B.{this.state.exam.body}</Radio>
        
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
      <Router>
      <div style={{textAlign:"center"}}>
      <Link to="/evaluation/analysis"><Button type="primary" onClick={this.onClick} style={{marginTop:30}}>提交</Button>
      </Link>
      </div>
      </Router>
     
      </layout>
    );
  }
}

export default Q2;