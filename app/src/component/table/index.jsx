import React, { Component } from 'react'
import './styles.less'
import axios from 'axios'
import { listDate } from "@/api/actions"


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    let a = {
      token: localStorage.getItem("quan"),
      limit: 200,
      pages: 1
    }

    //先获取
    listDate(a).then(res => {
      let data = res.result.list
      console.log(data)
      data.filter(v => {
        v.info = JSON.parse(v.info)
      })
      this.setState({
        data: data
      })
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="tab_box">
        {
          data.map((v,key)=>{
           switch(v.info.status){
             case 'a':
              return (
                <p style={{'background' : '#b51d1a'}} key={key}>{v.info.Door}</p>
              )
            case '建成待租':
              return (
                <p style={{'background' : '#000EFF'}} key={key}>{v.info.Door}</p>
              )
            case '欠费':
              return (
                <p style={{'background' : '#a5c438'}} key={key}>{v.info.Door}</p>
              )
            case '在建':
              return (
                <p style={{'background' : 'rgb(35, 182, 40)'}} key={key}>{v.info.Door}</p>
              )
            case '已配租':
              return (
                <p style={{'background' : '#917430'}} key={key}>{v.info.Door}</p>
              )
            case '已租赁':
              return (
                <p style={{'background' : '#23b628'}} key={key}>{v.info.Door}</p>
              )
            case '腾退待租':
              return (
                <p style={{'background' : 'gray'}} key={key}>{v.info.Door}</p>
              )
            default:
              return (
                <p  style={{'background' : 'green'}} key={key}>{v.info.Door}</p>
              )
           }
          })
        }
      </div>
    )
  }
}
