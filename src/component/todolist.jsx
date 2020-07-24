import React, { Component } from "react";
import Form from "./form";

class ToDoList extends Component {
  state = {
    input: "",
    id:0,
    userList: [],
  };
  myobj = {
    border: "1px solid red",
    height: 70,
  };
  icons ={
    textAlign:'right'
  }
  handleChange = (value) => {
    const input = value;
    // console.log(value)
    this.setState({ input });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {id:this.state.id,text:this.state.input};
    let exist = this.state.userList.filter(a=>a.id === newObj.id)[0];
   if(exist !== undefined){
    //  debugger;
     let index = this.state.userList.findIndex(a=>a.id === newObj.id);
     const userList = this.state.userList;
     let currentObj = userList[index];
     currentObj.text = this.state.input;
     const last = userList[userList.length-1];
     this.setState({userList,input:'',id:last.id+1});
     return;
   }
    const userList = [...this.state.userList, newObj];
    this.setState({ userList, input: "" ,id:this.state.id+1});
    // console.log(this.state.userList);
  };
  handleEdit = obj=>{
    
    let input = obj.text;
    this.setState({input,id:obj.id});  
  }
  handleDelete = id=>{
    const userList = this.state.userList.filter(user=>user.id !==id);
    this.setState({userList});
  }
  render() {
    return (
      <div className="container">
        <Form
          handleChange={this.handleChange}
          value={this.state.input}
          submit={this.handleSubmit}
        />
        {this.state.userList.map((u) => (
          <div key={u.id} style={this.myobj} className="offset-md-2 col-md-8 mt-5">
            <div className="row">
              <h3 className="col-md-7 d-inline-block mt-2">{u.text}</h3>
              <div style={this.icons} className="col-md-4 mt-2 mr-1">
                <i className="fa fa-pencil fa-2x btn"  aria-hidden="true" onClick={()=>this.handleEdit({id:u.id,text:u.text})}></i>
                <i className="fa fa-trash-o fa-2x ml-1 btn" aria-hidden="true" onClick={()=>this.handleDelete(u.id)}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ToDoList;
