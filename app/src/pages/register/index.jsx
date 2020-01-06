import React, { Component } from 'react'
import './styles.less'
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios'
import qs from 'qs'


export default @Form.create({ name: 'normal_login' })
class extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const obj = {
                    username: values.username,
                    password: values.password
                }
                axios.post('https://blog.zdldove.top/Home/Apis/sampleReg',qs.stringify(obj)).then(res => {
                    console.log(res)
                })
            }
        });
    };

    login = () => {
        this.props.history.push('/login')
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_box">
                <div className="body">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                            <span onClick={this.login}>已有账号，去登陆</span>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
