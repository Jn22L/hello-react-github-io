import React, { Component } from 'react';
import axios from 'axios';

class MyComp2 extends Component {
  state = {
    isLoading: true,
    items:[]
  }

  componentDidMount() {
    //this.saveList(); // post test
  }

  // 
  // saveList = () => {
  //   // Simple POST request with a JSON body using axios
  //   const article = { title: 'This is title', addr: 'this is addr '};
  //   axios.post('https://jn22l.herokuapp.com/save', article)
  //        .then(response => {
  //          console.log(response.data)
  //          this.setState({ isLoading: false })
  //         });
  // }

  render() {
    const { isLoading, items } = this.state
    return (
      <div>
        {isLoading ? '조회중 입니다. 잠시만 기다려 주세요 ...' : items}
      </div>
    );
  }
}

export default MyComp2;