import React, { Component } from 'react'
import { Modal, Button, Form, Icon, Select, Input, Checkbox } from "antd"
import { addset } from "@/api/actions"
import "./style.less"
import { connect } from 'react-redux'
const provinceData = ['瑞景河畔', '蔚蓝小区', '和盛园小区'];
const cityData = {
  瑞景河畔: ['瑞景河畔11号楼', '瑞景河畔12号楼', '瑞景河畔13号楼'],
  蔚蓝小区: ['蔚蓝小区15号楼', '蔚蓝小区16号楼', '蔚蓝小区17号楼'],
  和盛园小区: ['和盛园小区18号楼', '和盛园小区19号楼', '和盛园小区20号楼'],
};
const { Option } = Select;
export default
@connect(state => {
  return {
    setdata: state.Setdata.setDate
  }
})
@Form.create({
  name: 'global_state',
  mapPropsToFields(props) {
    if (props.title == "修改") {
      return Object.entries(props.setdata.info).reduce((v0, [k, v]) => {
        v0[k] = Form.createFormField({
          value: v
        })
        return v0
      }, {})
    }

  },
  onValuesChange(_, values) {

  },
})
class extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  }
  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.title == "添加") {
          let a = {
            token: localStorage.getItem("quan"),
            info: values
          }
          addset(a)
          this.props.handleCancel()
        } else {
          let a = this.props.setdata.info.id
          values.id = a
          let b = {
            token: localStorage.getItem("quan"),
            info: values
          }
          addset(b)
          this.props.handleCancel()
        }
      }
    });
  };
  render() {
    const { cities } = this.state
    const { title, dis, handleCancel } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <>
        <Modal
          title={title}
          visible={dis}
          onCancel={handleCancel}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="位置">
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Select
                  defaultValue={provinceData[0]}
                  style={{ width: 120 }}
                  onChange={this.handleProvinceChange}
                >
                  {provinceData.map((index, key) => (
                    <Option key={key} value={index}>{index}</Option>
                  ))}
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="房源">
              {getFieldDecorator('homeone', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Select
                  style={{ width: 120 }}
                  value={this.state.secondCity}
                  onChange={this.onSecondCityChange}
                >
                  {cities.map((index, key) => (
                    <Option key={key} value={index}>{index}</Option>
                  ))}
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="房源面积">
              {getFieldDecorator('homesize', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  placeholder="homesize"
                />,
              )}
            </Form.Item>
            <Form.Item label="计粗面积">
              {getFieldDecorator('updatetime', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  placeholder="updatetime"
                />,
              )}
            </Form.Item>
            <Form.Item label="户型">
              {getFieldDecorator('Door', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  placeholder="Door"
                />,
              )}
            </Form.Item>
            <Form.Item label="建筑构筑">
              {getFieldDecorator('building', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  placeholder="building"
                />,
              )}
            </Form.Item>
            <Form.Item label="租赁性质">
              {getFieldDecorator('leases', {
                rules: [{ required: true, message: 'Please select your gender!' }],
              })(
                <Select
                  placeholder="Select a option and change input text above"
                >
                  <Option value="公租房">公租房</Option>
                  <Option value="廉租房">廉租房</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="状态">
              {getFieldDecorator('status', {
                rules: [{ required: true, message: 'Please select your gender!' }],
              })(
                <Select
                  placeholder="Select a option and change input text above"
                >
                  <Option value="在建">在建</Option>
                  <Option value="建成待租">建成待租</Option>
                  <Option value="已配租">已配租</Option>
                  <Option value="已租赁">已租赁</Option>
                  <Option value="腾退待租">腾退待租</Option>
                  <Option value="欠费">欠费</Option>
                  <Option value="其他">其他</Option>
                </Select>,
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交
          </Button>
            <Button onClick={handleCancel} style={{ marginLeft: "10px" }} className="login-form-button">
              取消
          </Button>
          </Form>
        </Modal>
      </>
    )
  }
}
