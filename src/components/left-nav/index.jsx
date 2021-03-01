import React, {Component} from 'react';
import './index.less'
import logo from '../../assets/images/wowlogo.jpg'
import {Menu} from 'antd';
import {Link, withRouter} from "react-router-dom";

import menuList from "../../config/menuConfig";

const {SubMenu} = Menu;

class LeftNav extends Component {
    //如果想在 constructor 使用 props 那么 super 中必须写上 props
    constructor(props) {
        super(props);
        this.state = {
            pathName: "/home"
        }
    }

    /*
        使用 map遍历数组 , 递归调用
     */

    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {
                            this.getMenuNodes_map(item.children)
                            }
                        </SubMenu>
                    )
                }
            }
        )
    }

    /*
        根据 menu 的数据数组生成对应的标签组织
        使用 reduce() + 递归调用
     */
    // getMenuNodes = (menuList) => {
    //     return menuList.reduce((pre, item) => {
    //         if (!item.children) {
    //             pre.push((
    //                 <Menu.Item key={item.key} icon={item.icon}>
    //                     <Link to={item.key}>
    //                         {item.title}
    //                     </Link>
    //                 </Menu.Item>
    //             ))
    //         } else {
    //             pre.push((
    //                 <SubMenu key={item.key} icon={item.icon} title={item.title}>
    //                     {
    //                         this.getMenuNodes(item.children)
    //                     }
    //                 </SubMenu>
    //             ))
    //         }
    //
    //         return pre
    //     }, [])
    // }

    UNSAFE_componentWillMount() {
        const pathName = this.props.location.pathname
        this.setState({
            pathName
        })
    }

    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="Wow's Logo"/>
                    <h1>Wow's 后台</h1>
                </Link>

                <Menu
                    defaultSelectedKeys={[this.state.pathName]}
                    defaultOpenKeys={['/products']}
                    mode="inline"
                    theme="dark">

                    {
                        this.getMenuNodes_map(menuList)
                    }

                    {/*{this.getMenuNodes(menuList)}  */}
                </Menu>
            </div>
        );
    }
}

export default withRouter(LeftNav)