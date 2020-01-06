import React, { Component } from 'react'
import { Breadcrumb } from 'antd';

export default class extends Component {
	render() {
		let nowDate = new Date();
		let year = nowDate.getFullYear();
		let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
			: nowDate.getMonth() + 1;
		let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
			.getDate();
		let dateStr = year + "-" + month + "-" + day;
		return (
			<div className="right_flexbodx">
				<div className="navBox">
					<p>
						当前位置 :  
						<Breadcrumb>
							<Breadcrumb.Item>系统</Breadcrumb.Item>
							<Breadcrumb.Item>家庭成员</Breadcrumb.Item>
						</Breadcrumb>
					</p>
					<p className="time">
						时间 : {
							dateStr
						}
					</p>
				</div>
			</div>
		)
	}
}
