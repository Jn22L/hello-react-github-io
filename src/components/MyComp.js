import React, { Component } from 'react';
import axios from 'axios';

class MyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      attachFileInfo:[

      ]
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
      const { isLoading, attachFileInfo } = this.state
      const res = await axios.get("https://jn22l.herokuapp.com/list");
      //const res = await axios.get("http://127.0.0.1:4000/list")
      console.log('res_data', res.data.attachFileInfo)
      this.setState({ isLoading: false, attachFileInfo: res.data.attachFileInfo })    
    } catch (error) {
      console.error(error);
    }    
  }

  render() {
    const { isLoading, attachFileInfo } = this.state
    return (
      <div>
        {isLoading ? '조회중 입니다. 잠시만 기다려 주세요 ...' 
                   : attachFileInfo.map(item => (
                        <li key={item.fileid}>
                          {item.filename}:{item.filepath}
                        </li>
                      ))
        }
      </div>
    );
  }
}

export default MyComp;