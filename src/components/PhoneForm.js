// file: src/components/PhoneForm.js
import React, { Component } from 'react';
import Button from '@material-ui/core/Button'; 
import TextField from "@material-ui/core/TextField";

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
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
  handleSaveDB = (e) => {
    e.preventDefault()
    if(window.confirm('저장할까요?')){
        this.props.onSaveDB(this.state)      
    }
  }      
  render() {
    const { name } = this.state
    return (
        <form onSubmit={this.handleSubmit}>
          {/* <input
            placeholder="품목"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"          
          /> */}
          <TextField id="outlined-basic" label="품목" variant="outlined"  size="small"  
                     value={this.state.name}   
                     onChange={this.handleChange} 
                     name="name"       
          />
          {/*<input
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          />*/}        
          {/*<button type="submit">등록</button>*/}
          <Button type="submit" variant="contained" color="primary" size="small">등록</Button>
          {name !== 'iloveu'?<div></div>:
          //<button onClick={this.handleSaveDB}>DB저장</button>
          <Button onClick={this.handleSaveDB} variant="contained" color="secondary" size="small">DB저장</Button>
          }
      </form>
    );
  }
}

export default PhoneForm;