import React, { Component } from 'react'
import { Breadcrumb, Table, Spin } from 'antd';
import "./style.less"
import { listDate } from "@/api/actions"
import { addset } from "@/api/actions"
import dateStr from "@/component/time"
import Model from "@/component/model"
import { connect } from 'react-redux'
export default 
@connect(state => {
	return {

	}
}, {
	setdata: (v) => {
		return {
			type: 'SETDATE',
			payload: v
		}
	}
})
class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			columns: [
				{
					title: '位置',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.address}</p>
					},
					ellipsis: true
				},
				{
					title: '房源',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.homeone}</p>
					},
					ellipsis: true
				},
				{
					title: '房源面积',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.homesize}</p>
					},
					ellipsis: true
				},
				{
					title: '计粗面积',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.updatetime}</p>
					},
					ellipsis: true
				},
				{
					title: '户型',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.Door}</p>
					},
					ellipsis: true
				},
				{
					title: '建筑构筑',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.building}</p>
					},
					ellipsis: true
				},
				{
					title: '租赁性质',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.leases}</p>
					},
					ellipsis: true
				},
				{
					title: '状态',
					dataIndex: '',
					render: (v) => {
						return <p>{v.info.status}</p>
					},
					ellipsis: true
				},
				{
					title: '操作',
					dataIndex: '',
					render: (v) => {
						return <p className="setList_data">
							<span>删除</span>
							<span onClick={() => this.setOne(v)}>修改</span>
						</p>
					},
					ellipsis: true
				},
			],
			dis: false,
			style: "添加"
		}
	}
	componentDidMount() {
		let a = {
			token: localStorage.getItem("quan"),
			limit: 200,
			pages: 1
		}
		listDate(a).then(res => {
			let data = res.result.list
			data.filter(v => {
				v.info = JSON.parse(v.info)
			})
			this.setState({
				data: data
			})
		})
	}
	setOne = (v) => {
		this.props.setdata(v)
		this.setState({
			dis: true,
			style: "修改"
		})
	}
	rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {

		},
		getCheckboxProps: record => ({
			disabled: record.name === 'Disabled User',
			name: record.name,
		}),
	};
	showModal = () => {
		this.setState({
			dis: true,
			style: "添加"
		})
	}
	set = () => {
		let a = {
			token: localStorage.getItem("quan"),
			limit: 200,
			pages: 1
		}
		listDate(a).then(res => {
			let data = res.result.list
			data.filter(v => {
				v.info = JSON.parse(v.info)
			})
			this.setState({
				data: data,
				dis: false
			})
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

						</button>
						<Model dis={this.state.dis} title={this.state.style} handleCancel={this.set} />
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
