// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import MyComp from './components/MyComp';
import MyComp2 from './components/MyComp2';

class App extends Component {
  id = 3
  state = {
    information: [
      {
        id: 0,
        name: '소고기',
        phone: '010-0000-0000',
        addr: '월평동'
      },
      {
        id: 1,
        name: '삼겹살',
        phone: '010-0000-0001',
        addr: '삼성동'
      },
      { 
        id: 2,
        name: '북어국',
        phone: '010-0000-0000',
        addr: '갈마동'
      }
    ],
    keyword: ''
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
        <MyComp/>
      </div>
    );
  }
}

export default App;