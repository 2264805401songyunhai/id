import React, { Component } from 'react'
import './styles.less'
import { Form, Icon, Input, Button } from 'antd';

export default @Form.create({ name: 'normal_login' })
class extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const obj = {
					userName: values.username,
					passWord: values.password
				}
			}
		});
	};

	register = () => {
		this.props.history.push('/register')
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login_box">
				<div className="body">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '没输入' }],
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
								登录
                            </Button>
							<Button onClick={this.register} type="danger">注册</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}
