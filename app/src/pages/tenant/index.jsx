import React, { Component } from 'react';
import { Breadcrumb, Menu  } from 'antd';
import './styles.less';
import Select from '@/component/select'
import dateStr from "@/component/time"
import Ten from "@/component/table"

const { SubMenu } = Menu;
const datap = ["以租赁","以配租","欠费","腾退","待租","在建","其它"]
const color = ["#b51d1a","#000EFF","#a5c438","#7065D5","#917430","#23b628","gray"]
export default class componentName extends Component {
	handleClick = e => {
    console.log('click ', e);
  };
	render() {
		return (
			<div className="right_flexbodx">
				<div className="navBox">
					<div className="div">
						当前位置 :
						<Breadcrumb>
							<Breadcrumb.Item>系统</Breadcrumb.Item>
							<Breadcrumb.Item>承租方</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<p className="time">
						时间 : {dateStr}
					</p>
				</div>
				<div className="right_body">
						<div className="body_left">
							<Select />
						</div>
						<div className="body_right">
							<div className="line_species">
									<p className="p_title">瑞景河畔16号楼:</p>
									<div className="p">
											{
												datap.map((val,key)=>{
													return (
													<p key={key} style={{background:color[key]}} className="p_title1">{val}</p>
													)
												})
											}
									</div>
								</div>
								<div className="right_tab">
									<div className="tab1">
											<span className="tabp1">单元</span>
											<p>一单元</p>
											<p>二单元</p>
											<p>三单元</p>
									</div>
									<div className="tab2">
											<div className="tab2_left">
												<p>1层</p>
												<p>2层</p>
												<p>3层</p>
												<p>4层</p>
												<p>5层</p>
												<p>6层</p>
											</div>
											<div className="tab2_right">
												<Ten />
											</div>
									</div>
								</div>
						</div>
				</div>
			</div>
		)
	}
}
