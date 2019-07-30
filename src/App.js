import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Welcome to the User Data App',
      users:[
        {
          id: 1,
          name : "Maria",
          email:"maria@gmail.com",
          phone : "0458497898",
        },
        {
          id: 2,
          name : "Gill",
          email: "gill@gmail.com",
          phone: "0158569785",
        },
        { 
          id: 3,
          name : "Jenni",
          email: "jenni@gmail.com",
          phone : "2578965423",
        },
        { 
          id: 4,
          name : "Juha",
          email: "juha@gmail.com",
          phone : "8574125685",
        },
        { 
          id: 5,
          name : "Sunny",
          email: "sunny@gmail.com",
          phone : "4521565478",
        },
        { id: 6,
          name : "John",
          price: "john@gmail.com",
          phone : "1257856325",
        },
        { 
          id: 7,
          name : "Jenni",
          email: "jenni@gmail.com",
          phone : "2578965423",
        },
        { id: 8,
          name : "Ravin",
          email: "ravin@gmail.com",
          phone : "0254786623",
        },
        { 
          id: 9,
          name : "Peter",
          email: "peter@gmail.com",
          phone : "0321458564",
        },
        { 
          id: 10,
          name : "ALi",
          email: "ali@gmail.com",
          phone : "0452145785",
        }
      ]
    }
  }

 // functions to add the values
 // handleAdd functions is passed to the Main.js->form as a props
  handleAddInput = (fields) =>{
     let users = this.state.users;
         users.push (fields)
         this.setState({users});
  }

  // functions to delete the values
  // handleDelete functions is passed to the Main.js->form as a props
  handleDelete = (e) =>{
     let listIndex = e.target.value;
     console.log(listIndex);
     let users = this.state.users;
         users.splice (listIndex,1);
         this.setState({users});
  }

  // functions to edit the values
  // handleEdit functions is passed to the Main.js->form as a props
  handleUpdateInput = (newUser, index) =>{
    this.setState(prevState => {
      return {users: [...prevState.users.slice(0, index), newUser, ...prevState.users.slice(index + 1)]}
     })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <div className="main-content">
            <Main  users={this.state.users}
                   title={this.state.title}
                   handleAddInput={this.handleAddInput}
                   handleDelete={this.handleDelete}
                   handleUpdateInput={this.handleUpdateInput}/>
            </div>
          <Footer />
      </div>
    );
  }
}

export default App;
