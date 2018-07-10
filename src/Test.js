import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button} from 'antd';
//import { Link } from 'react-router-dom';
//import {queryLessons} from './server'
//import CardList from './CardList'
import './Q&E.css';
import Eva from './Evaluation';
import TopHeader from './TopHeader';
import BasicRouter from './Router';
import s1 from './step1';
import s3 from './step3';
import { Pagination,Tooltip, Progress } from 'antd';
import Q1 from './quiz1'
import Q2 from './quiz2'
import Q3 from './quiz3'



const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;





class Test extends Component {
	 
	  state = {
    
  }
	  

 

	

  render() {
    return (
    	
    	<Layout>
 //   	<TopHeader/>	
    	<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700}}>
    	
<Q2/>
  
  
		      
		      </Content>
		      
		      
		    
		</Layout>)
    }
  //var s1=document.getElementbyId("s1");
	//var ti=document.getElementbyId("testTitle");
	//if (s1.value==1){
	//	ti.innerHTML="七年级";
	//}
}
export default Test;