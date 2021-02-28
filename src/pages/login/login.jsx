import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import './login.less'
import logo from '../../assets/images/wowlogo.jpg'
import {
    Button,
    Form,
    Input,
    message,
    Checkbox
} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons';
import {reqLogin} from "../../api";

//引入内存工具模块
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils"

/*
    登录的路由组件
 */

class Login extends Component {
    doingIt = () => {
        message.warning("别点了...这功能还没做", 2)
    }
    doingIt2 = () => {
        message.warning("都说了别点了，这功能也没做......", 2)
    }

    render() {
        //如果用户已经登录，自动跳转到管理界面
        const user = memoryUtils.user
        if (user && user._id) {
            return <Redirect to='/'/>
        }

        //提交成功
        const onFinish = async (values) => {
            const {username, password} = values
            //异步获取返回结果
            const result = await reqLogin(username, password)
            console.log(result)
            if (result.status === 0) {
                message.success("登录成功", 1)

                const user = result.data
                //把用户信息存在内存里,一刷新就没....

                storageUtils.saveUser(user) //保存在local中
                memoryUtils.user = user // 保存在内存中

                //跳转到管理页面（不需要再退回到登录）
                //用 replace 不用 push 的原因是因为不需要重复登录
                if (values.remember !== true) {
                    storageUtils.removeUser()
                }
                this.props.history.replace('/')
            } else {
                message.error("用户名或密码错误", 3)
            }
        }

        //提交失败
        const onFinishFailed = () => {
            message.error('提交失败', 1);
        }
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>Wow's Home</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>

                    <Form name="normal_login" className="login-form" initialValues={{
                        username: "admin",
                        password: "admin",
                        remember: true
                        // 初始值
                    }} onFinish={onFinish} onFinishFailed={onFinishFailed}>


                        <Form.Item name="username"
                                   rules={[{required: true, message: '请填写用户名'},
                                       {min: 1, max: 12, type: "string", message: '用户名长度应为1-12位'},
                                       {pattern: /^[a-zA-Z0-9_]+$/, type: "string", message: '必须是英文、数字或下滑线组成'},
                                   ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="用户名"/>
                        </Form.Item>


                        <Form.Item name="password" rules={[
                            {required: true, message: '请填写密码',},
                            {min: 4, max: 15, type: "string", message: '密码长度应为4-15位'},
                            {pattern: /^[a-zA-Z0-9_]+$/, type: "string", message: '必须是英文、数字或下滑线组成'},
                        ]}>
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                placeholder="密码"
                                iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}/>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>自动登录</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="#" onClick={this.doingIt2}>
                                忘记密码
                            </a>
                            <a href="#" onClick={this.doingIt}>注册 </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>

                    </Form>
                </section>
            </div>
        );
    }
}

export default Login;