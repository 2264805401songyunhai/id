import React, { Component } from 'react'
import { Modal, Button, Form, Icon, Input } from "antd"
export default
@Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {

  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        value: "",
      }),
    };
  },
  onValuesChange(_, values) {

  },
})
// let setone = {
// 	id:v.id,
// 	address: "ssss",
// 	homeone: "aa",
// 	homesize: "a",
// 	updatetime: "a",
// 	Door: "a",
// 	building: "a",
// 	leases: "a",
// 	status: "a"
// }
// let setdata = {
// 	token: localStorage.getItem("quan"),
// 	info:setone,
// }
// addset(setdata).then(res => {

// })
class extends Component {
  state = { visible: false, disone: "", id: "" }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentWillReceiveProps(a) {
    console.log(a)
    this.setState({
      visible:a.dis,
      disone: a.styleONE
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
      >
        <div>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
            <Button type="" htmlType="submit" className="login-form-button">
              Log in
          </Button>
        
     </div>  
       </Modal>
       </Form>
    )
  }
}
