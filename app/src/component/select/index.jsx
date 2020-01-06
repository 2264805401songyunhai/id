import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default class extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <div>
         <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          className="a"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme = "white"
        >
          <SubMenu
            className="a"
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>房源管理</span>
              </span>
            }
          >
            <SubMenu className="a" key="sub3" title="瑞景河畔">
              <Menu.Item className="a" key="7">瑞景河畔16号</Menu.Item>
              <Menu.Item className="a" key="8">瑞景河畔17号</Menu.Item>
              <Menu.Item className="a" key="9">瑞景河畔18号</Menu.Item>
              <Menu.Item className="a" key="10">瑞景河畔19号</Menu.Item>
              <Menu.Item className="a" key="11">瑞景河畔20号</Menu.Item>
              <Menu.Item className="a" key="12">瑞景河畔21号</Menu.Item>
              <Menu.Item className="a" key="13">瑞景河畔22号</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
