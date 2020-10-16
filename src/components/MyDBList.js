import React, { Component } from 'react';

class MyDBList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items:[]
    }
  }

  handleKeyClick = (e, redis_key) => {
    e.preventDefault();
    this.props.onKeyClick(redis_key);
  }

  render() {
    console.log("MyComp.render()")
    const { isLoading, items } = this.state
    const { data } = this.props
    return (
      <div>
        ▶ 쇼핑 이력 
        { data.map((val,idx) => (
            <li key={idx}>
              <a href="/" onClick={(e)=>this.handleKeyClick(e,val)} data-dbkey={val}>{val}</a>
            </li>
          ))
        }
      </div>
    );
  }
}

export default MyDBList;