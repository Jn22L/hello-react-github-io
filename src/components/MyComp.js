import React, { Component } from 'react';
import axios from 'axios';

class MyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items:[]
    }
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
      const { isLoading, items } = this.state
      const res = await axios.get("https://jn22l.herokuapp.com/list");
      //const res = await axios.get("http://127.0.0.1:4000/list")
      console.log('res_data', res)
      this.setState({ isLoading: false, items: res.data })    
    } catch (error) {
      console.error(error);
    }    
  }

  render() {
    const { isLoading, items } = this.state
    return (
      <div>
        {items.json}
        {/*isLoading ? '조회중 입니다. 잠시만 기다려 주세요 ...' 
                   : attachFileInfo.map(item => (
                        <li key={item.json}>
                          {item.json}:{item.json}
                        </li>
                      ))
                   */}
      </div>
    );
  }
}

export default MyComp;