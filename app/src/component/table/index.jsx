import React, { Component } from 'react'
import './styles.less'
import axios from 'axios'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
    axios.get('../data.json').then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="tab_box">
          {
            data.map((v,key)=>{
              return (
                <ul key={key}>
                  <li>{v.yi}</li>
                  <li>{v.er}</li>
                  <li>{v.san}</li>
                  <li>{v.si}</li>
                  <li>{v.wu}</li>
                  <li>{v.liu}</li>
                </ul>
              )
            })
          }
      </div>
    )
  }
}
