import React, { Component } from 'react';


class Main extends Component {
  constructor(props){
      super(props);
        this.state = {
          id: "",
          name : "",
          email: "",
          phone: "",
          editing: false
        }
    }

edit = (e) =>{
  let index=e.target.value;
  let id =this.props.users[index].id
  let name =this.props.users[index].name;
  let email=this.props.users[index].email;
  let phone=this.props.users[index].phone;
  this.setState({
          index,
          id:id,
          name:name,
          email:email,
          phone:phone,
          editing: !this.state.editing
        })
}    

onChange = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
    [name]:value
  });
};

handleAddInput = (e) =>{
  e.preventDefault();
  this.props.handleAddInput(this.state);
}

handleUpdateInput = (e) => {
  e.preventDefault();
    this.props.handleUpdateInput({
          id: this.state.id,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone
        }, this.state.index)
}

renderNormal = () =>{
   let users= this.props.users.map((product, index) => 
                                        <li key={index} className="list-items-display"> 
                                         <b>Id:</b> {product.id} <br /> 
                                         <b>Name:</b> {product.name} <br />
                                         <b>Email:</b> {product.email} <br />
                                         <b>Phone:</b> {product.phone} <br />
                                        <button onClick={this.props.handleDelete} value={index}>Remove</button>
                                        <button onClick={this.edit} value={index} >Edit</button>
                                        </li>);
    return (
      <div className="main-content">
        <div className="form-area">
          <form>

          <label>
                Id:
                <input type="text" 
                       name="id"
                       value={this.state.id}
                       onChange={this.onChange} />
            </label>

            <label>
                Name:
                <input type="text" 
                       name="name"
                       value={this.state.name}
                       onChange={this.onChange} />
            </label>

            <label>
                 Email:
                <input type="text" 
                       name="email"
                       value={this.state.email}
                       onChange={this.onChange} />
            </label>

            <label>
                 Phone:
                <input type="text" 
                       name="phone"
                       value={this.state.phone}
                       onChange={this.onChange} />
            </label>

        <button onClick={this.handleAddInput}>Submit</button>
          </form>

         </div> 

         <div className="item-display">
            <h1>List of Users</h1>
            <p>{users}</p>
          </div>

      </div>
    );
}

renderEdit =() =>{
     let users= this.props.users.map((product, index) => 
                                        <li key={index.toString()} className="list-items-display"> 
                                        <b>Id:</b> {product.id} <br />
                                        <b>Name:</b> {product.name} <br />
                                        <b>Email:</b> {product.email} <br />
                                        <b>Phone:</b> {product.phone} <br />
                                        <button onClick={this.props.handleDelete} value={index}>Remove</button>
                                        <button onClick={this.edit} value={index.toString()}>Edit</button>
                                        </li>);
    return (
      <div className="main-content-area">
        <div className="form-area">
          <form>

          <label>
                Id:
                <input type="text" 
                       name="id"
                       value={this.state.id}
                       onChange={this.onChange} />
            </label>

            <label>
                Name:
                <input type="text" 
                       name="name"
                       value={this.state.name}
                       onChange={this.onChange} />
            </label>

            <label>
                 Email:
                <input type="text" 
                       name="email"
                       value={this.state.email}
                       onChange={this.onChange} />
            </label>

            <label>
                 Phone:
                <input type="text" 
                       name="phone"
                       value={this.state.phone}
                       onChange={this.onChange} />
            </label>

            <button onClick={this.handleUpdateInput}>Submit</button>
          </form>

         </div> 

         <div className="item-display">
            <h1>List of Users</h1>
            <p>{users}</p>
          </div>

      </div>
    );
}

  render() {
   if(this.state.editing){
    return this.renderEdit()
   }else {
    return this.renderNormal()
   }
  }
}

export default Main;
