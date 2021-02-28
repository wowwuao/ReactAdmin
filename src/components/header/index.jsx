import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Modal, Button} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';

import './index.less'
import moment from 'moment';
import WeatherSelect from "../weatherSelect/weatherSelect";
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from "../../utils/storageUtils";
import menuList from "../../config/menuConfig";


class Header extends Component {
    state = {
        currentTime: moment().format("YYYY-MM-DD HH:mm:ss"),
    }

    //获取当前时间
    getTime = () => {
        //每隔1s获取当前时间
        this.interValId = setInterval(() => {
            const currentTime = moment().format("YYYY-MM-DD HH:mm:ss")
            this.setState({
                currentTime
            })
        }, 1000)
    }

    //获取左侧头部的标题
    getTitle = () => {
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                //在所有子item中查找匹配的
                const cItem = item.children.find(cItem => cItem.key === path)
                // console.log(cItem)
                //如果有值才说明有匹配的
                if (cItem) {
                    // 取出它的title
                    title = cItem.title
                }
            }
        })
        return title
    }

    //退出登录的弹窗
    logout = () => {
        const {confirm} = Modal;
        confirm({
            title: '你确定要退出登录吗?',
            icon: <ExclamationCircleOutlined/>,
            content: '',
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                //删除保存的user数据
                storageUtils.removeUser()
                memoryUtils.user = {}
                this.props.history.replace('/login')
            }
        });
    }


    componentDidMount() {
        this.getTime()
    }

    /*
        当前组件卸载之前调用
    */
    componentWillUnmount() {
        //清除定时器
        clearInterval(this.interValId)
    }

    render() {
        const title = this.getTitle()
        const user = memoryUtils.user
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎 {user.username}</span>
                    <Button type="link" onClick={this.logout}>退出</Button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">

                        <span>{this.state.currentTime}</span>
                        <WeatherSelect/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)