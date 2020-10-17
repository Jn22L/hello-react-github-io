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
                 data-dbkey={val}>{val}
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