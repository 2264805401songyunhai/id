import React, { Component } from 'react'
import { Modal, Button, Form, Icon, Input, Checkbox } from "antd"
export default
@Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        value:"",
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})
class extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentWillReceiveProps(a){
    console.log(a)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="Basic Modal"
        footer={null}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
  }
}
