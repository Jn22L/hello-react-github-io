// file: src/App.js
import React, { Component } from 'react';
import axios from 'axios';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import MyDBList from './components/MyDBList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '품목1',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '품목2',
        phone: '010-0000-0001'
      }
    ],
    keyword: '',
    my_key_list: []
  }

  componentDidMount() {
    this.getHistory(); 
  }
  
  getHistory = async () => {
    axios.get("http://localhost:4000/getKeys")    
    //axios.get("https://jn22l.herokuapp.com/getKeys")    
    .then((res) => { 
      if(res.status === 200){  
        console.log('getHeroku : res_data', res)
        this.setState({ isLoading: false, my_key_list: res.data })  
      }    
      console.log('getHeroku~: res_data', res)
    })
    .catch((error) => {
      console.error('getHeroku error',error)
    })
  }

  handleKeyClick = (redis_key) => {
    axios.post('http://localhost:4000/getValue', redis_key)
    //axios.post('https://jn22l.herokuapp.com/getValue', redis_key)    
      .then((res) => { 
        if(res.status === 200){  
            console.log('handleKeyClick',res.data.information)
            this.setState({ isLoading: false, information: res.data.information })
            if(res.data.information.length !== 0) {
              this.id = res.data.information[res.data.information.length-1].id+1 //max id 세팅
            } else {
              this.id = 0
            }
        }    
      })
      .catch((error) => {
        console.error(error)
      })  
    console.log("handleKeyClick 끝")
  }

  handleSaveDB = ( ) => {
    const { information } = this.state;
    axios.post('http://localhost:4000/save', {"information" : information })
    //axios.post('https://jn22l.herokuapp.com/save', {"information" : information })
         .then(response => {
            console.log(response.data)
            this.getHistory(); // 목록 조회
          });    
  }  

  handleDelete = (redis_key) => {
    axios.post('http://localhost:4000/delKey', redis_key)
    //axios.post('https://jn22l.herokuapp.com/delKey', redis_key)    
      .then((res) => { 
        if(res.status === 200){  
            console.log('handleDeleteDB',res)
            this.getHistory(); // 목록 조회
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
    const { information, keyword, my_key_list } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
      
    );    
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
          onSaveDB={this.handleSaveDB}
        />
        <p>
          <input 
            placeholder="검색 할 이름을 입력하세요.." 
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />        
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />    
        <MyDBList
          data={my_key_list}
          onKeyClick={this.handleKeyClick}
          onDeleteClick={this.handleDelete}
        />      
      </div>
    );
  }
}

export default App;