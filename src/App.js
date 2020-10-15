// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import MyComp from './components/MyComp';
import MyComp2 from './components/MyComp2';
import axios from 'axios';
import { findAllByDisplayValue } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
      this.id = 3
      this.state = {
        id: 3,
        loading: false,
        information: [
          {
            id: 0,
            name: '소고기',
            phone: '010-0000-0000'
          },
          {
            id: 1,
            name: '삼겹살',
            phone: '010-0000-0001'
          },
          { 
            id: 2,
            name: '북어국',
            phone: '010-0000-0000'
          }
        ],
        keyword: ''
      }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    /* complete 추가하면서 주석처리 ( 그냥 모두 렌더링 - 스터디 차원)
    if (!this.state.editing  
        && !nextState.editing
        && nextProps.info === this.props.info) {
      return false;
    }
    */
    // 나머지 경우엔 리렌더링함
    return true;
  }

  /*
  componentDidMount() {
    axios.post(`http://localhost:4000/getValue?`, "my_sp_list_20201015")
         .then(res => {
           //const hello_heroku = res.data;
           console.log('App.js componentDidMount===>',res.data);
           //this.setState({ hello_heroku });
      })

  }
  */

  handleSaveDB = ( ) => {
    const { information } = this.state;
    //axios.post('http://localhost:4000/save', {"information" : information })
    axios.post('https://jn22l.herokuapp.com/save', {"information" : information })
         .then(response => {
           console.log(response.data)
           //this.setState({ information: response.data })
          });    
  }  

  handleKeyClick = (redis_key) => {
    //axios.post('http://localhost:4000/getValue', redis_key)
    //axios.post(`http://localhost:4000/getValue?key=${redis_key}`)
    axios.post('https://jn22l.herokuapp.com/getValue', redis_key)    
      .then((res) => { 
        if(res.status == 200){  
            console.log(res.data)
            this.setState({ isLoading: false, information: res.data.information })
        }    
      })
      .catch((error) => {
        console.error(error)
      })  
    console.log("handleKeyClick 끝")
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }  
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }  
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }  
  render() {
    console.log('render App');
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
      
    );    
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
          onSaveDB={this.handleSaveDB}
        />
        <input 
            placeholder="검색 할 품목을 입력하세요.." 
            onChange={this.handleChange}
            value={keyword}
        />
        <hr />        
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        <MyComp
          onKeyClick={this.handleKeyClick}
        />
       
      </div>
    );
  }
}

export default App;