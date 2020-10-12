import React, { Component } from 'react';
import axios from 'axios';

class MyComp extends Component {
  state = {
    isLoading: true,
    items:[]
  }

  componentDidMount() {
    /*
    axios.get(`https://jn22l.herokuapp.com/`) // remote
      .then(res => {
        const hello_heroku = res.data;
        console.log(res.data);
        this.setState({ hello_heroku });
      })
    */
    this.getHeroku(); // 비동기 test
  }

  // 비동기 get
  getHeroku = async () => {
    try {
      const res = await axios.get("https://jn22l.herokuapp.com/");
      //const res = await axios.get("https://velog.io/@poburi/React-%EC%98%81%ED%99%94-%EC%84%9C%EB%B9%84%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-1-axios-async-await");
      //const res = await axios.get("http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=jIyPOUXOylNa2PPLjM1WVFU5ZZWQCxSFFq4PGGzpDuXJVyHnEjQv3USuZbCfFRUEA1qgCaChCTXyN9G0t1%2BhpQ%3D%3D&numOfRows=10&pageNo=1");
      //const res = await axios.get("http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=jIyPOUXOylNa2PPLjM1WVFU5ZZWQCxSFFq4PGGzpDuXJVyHnEjQv3USuZbCfFRUEA1qgCaChCTXyN9G0t1%2BhpQ%3D%3D&numOfRows=10&pageNo=1");
      console.log(res.data);
      this.setState({ items : res.data, isLoading: false });    
    } catch (error) {
      console.error(error);
    }    
  }

  render() {
    const { isLoading, items } = this.state
    return (
      <div>
        {isLoading ? '조회중 입니다. 잠시만 기다려 주세요 ...' : items}
      </div>
    );
  }
}

export default MyComp;