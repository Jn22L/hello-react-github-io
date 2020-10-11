import React, { Component } from 'react';
import axios from 'axios';

class MyComp extends Component {
  state = {
    hello_heroku: ''
  }
  componentDidMount() {
    axios.get(`https://jn22l.herokuapp.com/`) // remote
      .then(res => {
        const hello_heroku = res.data;
        console.log(res.data);
        this.setState({ hello_heroku });
      })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }  
  render() {
    return (
      <div>
        {this.state.hello_heroku}
      </div>
    );
  }
}

export default MyComp;