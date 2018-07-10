import React, { Component } from 'react';
import { Radio, Input,Button } from 'antd';
//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import axios from 'axios'
import {Layout, Menu, Icon, Carousel, Tabs, Breadcrumb} from 'antd';
import TopHeader from './TopHeader'
import Searching from './SearchingBar'
import Smn from './Submenu'
import Questions from './Questions'
import Questions_2 from './Questions_2'
import Questions_3 from './Questions_3'
import Us from './UserCenter'
import { queryQuestions } from './server'
import { queryExams } from './server'

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

const RadioGroup = Radio.Group;

function callback(key) {
  console.log(key);
}

class Ana extends Component {
	state = {
		exam:[],
		disabled: true,
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
  
 
  render() {
  	const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
  	
  	
    return (
      <div className="App">
    
   
    <Layout className="layout"> 
  
    
 //   <TopHeader />	
		<div >
		<h1 style={{textAlign:"center"}}> 得分与解析 </h1>
		</div>
		<div >
		<h2>您的得分: score.url</h2></div>
		<div style={{textAlign:"left"}}>
		    <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第一题:{this.state.exam.title}
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup  defaultValue={1}>
        <Radio style={radioStyle} value={1} disabled={this.state.disabled} className="radios">A.{this.state.exam.body}</Radio>
        <Radio style={radioStyle} value={2} disabled={this.state.disabled} className="radios">B.{this.state.exam.body}</Radio>
        <Radio style={radioStyle} value={3} disabled={this.state.disabled} className="radios">C.{this.state.exam.body}</Radio>
        <Radio style={radioStyle} value={4} disabled={this.state.disabled} className="radios">B.{this.state.exam.body}</Radio>
        
      </RadioGroup>
      <h2>正确答案是:  answer.url</h2>
      <h3>答案解析: url....</h3>
      </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第二题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup  >
        <Radio style={radioStyle} value={1} disabled={this.state.disabled} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} disabled={this.state.disabled} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} disabled={this.state.disabled} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} disabled={this.state.disabled} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
      <h2>正确答案是:  answer.url</h2>
      <h3>答案解析: url....</h3>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第三题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup  >
        <Radio style={radioStyle} value={1} disabled={this.state.disabled} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} disabled={this.state.disabled} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} disabled={this.state.disabled} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} disabled={this.state.disabled} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
      <h2>正确答案是:  answer.url</h2>
      <h3>答案解析: url....</h3>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第四题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup  >
        <Radio style={radioStyle} value={1} disabled={this.state.disabled} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} disabled={this.state.disabled} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} disabled={this.state.disabled} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} disabled={this.state.disabled} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
      <h2>正确答案是:  answer.url</h2>
      <h3>答案解析: url....</h3>
       </div>
      <div style={{ marginTop: 50,marginLeft: 50}} >
        <h1 >第五题:url.quiz_title
    </h1>
    </div>
    <div style={{ marginTop: 20,marginLeft: 70}} >
      <RadioGroup  >
        <Radio style={radioStyle} value={1} disabled={this.state.disabled} className="radios">A.quiz_radio_1</Radio>
        <Radio style={radioStyle} value={2} disabled={this.state.disabled} className="radios">B.quiz_radio_2</Radio>
        <Radio style={radioStyle} value={3} disabled={this.state.disabled} className="radios">C.quiz_radio_3</Radio>
        <Radio style={radioStyle} value={4} disabled={this.state.disabled} className="radios">B.quiz_radio_4</Radio>
        
      </RadioGroup>
      <h2>正确答案是:  answer.url</h2>
      <h3>答案解析: url....</h3>
       </div>
		</div>
    
  </Layout>
      </div>
    );
  }
}


export default Ana;
