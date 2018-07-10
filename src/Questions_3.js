import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button} from 'antd';
//import { Link } from 'react-router-dom';
//import {queryLessons} from './server'
//import CardList from './CardList'
import './Q&E.css';
import axios from 'axios'
import { queryQuestions } from './server'
import { queryDetails } from './server'

const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Questions_3 extends Component {
	 state = {
		questions:[]
	}
  	componentDidMount() {
    var that = this;
    that.getJsonData();
   }
	
	getJsonData = () => {
    queryQuestions().then(res => {
      this.setState({questions:res})
      console.log(res)
    });
   // queryDetails().then(res => {
   //   this.setState({questions:res})
   //   console.log(res)
   // });
  	};
  render() {
    return (
    	<Layout className="father">
    		<div className="major" >
			<div className="content" >
				<h1>{this.state.questions.title}</h1>
				<p>{this.state.questions.comments}</p>
			</div>
			<div className="content"  >
				<h1>{this.state.questions.title}</h1>
				<p>{this.state.questions.comments}</p>
			</div>
			<div className="content" >
				<h1>{this.state.questions.title}</h1>
				<p>{this.state.questions.comments}</p>
			</div>
			<div className="content" >
				<h1>{this.state.questions.title}</h1>
				<p>{this.state.questions.comments}</p>
			</div>
		</div>
		</Layout>)
    }
}
export default Questions_3;