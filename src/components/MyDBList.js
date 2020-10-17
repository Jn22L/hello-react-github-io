import React, { Component } from 'react';

class MyDBList extends Component {
  constructor(props) {
    super(props);
    this.canDeleteCount = 0
    this.state = {
      isMaster: false,
      items:[]
    }
  }

  handleKeyClick = (e, redis_key) => {
    e.preventDefault()
    this.props.onKeyClick(redis_key);
  }

  handleDelete = (e, redis_key) => {
    e.preventDefault()
    if(window.confirm('정말 삭제할까요?')){
      this.props.onDeleteClick(redis_key)
    };
  }

  handleDoubleClick = (e) => {
    this.canDeleteCount = this.canDeleteCount + 1
    if(this.canDeleteCount >=3 ) {
      this.setState({
        isMaster: true
      })
    }
  }

  getLocalTime = (heroku_time_str) => {
    let week = ["일", "월", "화", "수", "목", "금", "토"];

    let yyyy = heroku_time_str.substring(11,15)  
    let mm = heroku_time_str.substring(15,17) - 1
    let dd = heroku_time_str.substring(17,19) 
    let hh24 = heroku_time_str.substring(20,22)
    let mi = heroku_time_str.substring(23,25) 
    let ss = heroku_time_str.substring(26,28)
    let ht = new Date(yyyy, mm, dd, hh24, mi, ss) 
    ht.setHours(ht.getHours() + 9);
    
    return ht.getFullYear() + '/' + ('0' + ht.getMonth()).slice(-2) + '/' + ht.getDate() + '(' + week[ht.getDay()] + ')'
           + ht.getHours() + ':'  + ('0' + ht.getMinutes()).slice(-2) + ':'  + ht.getSeconds()
  }


  render() {
    const { items, isMaster } = this.state
    const { isLoading, data } = this.props
    return (
      <div>
        <div onDoubleClick={(e)=>this.handleDoubleClick(e)} >▶ 쇼핑 이력 </div>
        {isLoading?'쇼핑이력 조회중 입니다 ...':
          data.map((val,idx) => (
            <li key={idx}>
              <a href="/" 
                 onClick={(e)=>this.handleKeyClick(e,val)} 
                 data-dbkey={val}>
                  {this.getLocalTime(val)}
              </a>
              {isMaster?<button onClick={(e)=>this.handleDelete(e,val)}>삭제</button>:<div></div>}
            </li>
          ))
        }
      </div>
    );
  }
}

export default MyDBList;