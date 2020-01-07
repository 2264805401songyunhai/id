import React, { Component } from 'react'
import { Breadcrumb, Table, Spin } from 'antd';
import "./style.less"
import { listDate } from "@/api/actions"
import { addset } from "@/api/actions"
import dateStr from "@/component/time"
import Model from "@/component/model"

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			columns: [
				{
					title: '位置',
					dataIndex: '',
					render:(v)=>{
							return <p>{v.info.address}</p>
					}
				},
				{
					title: '房源',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.homeone}</p>
				}
				},
				{
					title: '房源面积',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.homesize}</p>
				}
				},
				{
					title: '计粗面积',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.updatetime}</p>
				}
				},
				{
					title: '户型',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.Door}</p>
				}
				},
				{
					title: '建筑构筑',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.building}</p>
				}
				},
				{
					title: '租赁性质',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.leases}</p>
				}
				},
				{
					title: '状态',
					dataIndex: '',
					render:(v)=>{
						return <p>{v.info.status}</p>
				}
				},
				{
					title: '操作',
					dataIndex: '',
					render: () => {
						return <p className="setList_data">
							<span>删除</span>
							<span>修改</span>
						</p>
					}
				},
			],
			dis: false,
			style: "添加"
		}
		let a = {
			token: localStorage.getItem("quan"),
			limit:200,
			pages:1
		}
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
		
		//先获取
		listDate(a).then(res => {
			let data = res.result.list
			data.filter(v=>{
				v.info=JSON.parse(v.info)
			})		
			console.log(data)
			this.setState({
				data:data
			})
		})
		
	}
	rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: record => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name,
		}),
	};
	showModal = () => {
		if (this.state.dis === true) {
			this.setState({
				dis: false,
				style: "添加"
			})
		} else {
			this.setState({
				dis: true,
				style: "添加"
			})
		}
	}
	set = (v) => {
		this.setState({
			dis: v
		})
	}
	render() {
		return (
			<div className="right_flexbodx">
				<div className="navBox">
					<div className="div">
						当前位置 :
						<Breadcrumb>
							<Breadcrumb.Item>系统</Breadcrumb.Item>
							<Breadcrumb.Item>房源管理</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<p className="time">
						时间 : {dateStr}
					</p>
				</div>
				<div className="flexLastone">
					<div className="tabHeader">
						搜索
						</div>
					<div className="tabDefault">
						<input type="text" name="" id="" />
						<button>
							查询
								</button>
						<button onClick={this.showModal}>
							新增
							<Model dis={this.state.dis} styleONE={this.state.style}  />
						</button>
						<button>
							删除
								</button>
					</div>
					{
						this.state.data.length == 0 ? <div className="Loadingdata"><Spin /><br /><span style={{ "color": "blue" }}>...Loading</span></div> : <Table rowKey={v => v.id} pagination={
							{
								total: Number(this.state.data.length),
								pageSize: 7
							}
						} rowSelection={this.rowSelection} columns={this.state.columns} dataSource={this.state.data} />
					}
				</div>
			</div>
		)
	}
}
