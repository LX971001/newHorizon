import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import axios from 'axios'
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button, Breadcrumb} from 'antd';
import TopHeader from './TopHeader'
import Searching from './SearchingBar'
import Smn from './Submenu'
import Questions from './Questions'
import Questions_2 from './Questions_2'
import Questions_3 from './Questions_3'
import Us from './UserCenter'
import { queryQuestions } from './server'
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Que extends Component {
  
 
  render() {
  	
  	
    return (
      <div className="App">
    
      <Layout>
    <Layout className="layout"> 
  
    
 //   <TopHeader />	
		<Content style={{ width: 1400,height: 35 }}>
      <Searching />
      </Content>
   
    
  </Layout>
    <Layout>
     
      <Layout style={{ padding: '0 24px 0' }}>
      
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700}}>
          <Tabs defaultActiveKey="1" onChange={callback} style={{float:'left',width:300}}>
    <TabPane tab="推荐" key="1"><Questions/></TabPane>
    <TabPane tab="最新" key="2"><Questions_2/></TabPane>
    <TabPane tab="等待回答" key="3"><Questions_3/></TabPane>
  </Tabs>
        </Content> 
        <Sider width={350} style={{ background: '#fff' }}>
        <Us/>
      </Sider>
      </Layout>
    </Layout>
  </Layout>
      </div>
    );
  }
}


export default Que;
