import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";
import {Redirect, Route, Switch} from 'react-router-dom'

//布局组件
import {Layout} from 'antd';
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

//路由组件
import Home from "../home/home";
import Category from "../category/category";
import Collection from "../collection/collection";
import Role from "../role/role";
import User from "../user/user";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
import File from "../file/file";

const {Footer, Sider, Content} = Layout;


class Admin extends Component {
    render() {
        const user = memoryUtils.user
        // console.log(user)

        //当前没有登录，或者登录之后刷新页面
        if (!user || !user._id) {
            console.log("没存上！！！")
            //自动跳转到登录界面
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height: "100%"}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{margin: "20px", backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/collection' component={Collection}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Route path='/file' component={File}/>
                            <Route path='/charts/bar' component={Bar}/>
                            <Route path='/charts/line' component={Line}/>
                            <Route path='/charts/pie' component={Pie}/>
                            <Redirect to='/home'/>
                        </Switch>

                    </Content>
                    <Footer style={{textAlign: "center", color: "#cccccc"}}>COPYRIGHT©2021 -Wowwuao
                        ALL RIGHTS RESERVED.</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;