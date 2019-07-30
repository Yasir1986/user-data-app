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
      products:[
        {
          id: 1,
          name : "Laptop",
          price:"$500",
          description : "High Configuration"
        },
        {
          id: 2,
          name : "Mobile",
          price: "$500",
          description : "High Configuration"
        },
        { id: 3,
          name : "Desktop",
          price: "$500",
          description : "High Configuration"
        }
      ]
    }
  }

 // functions to add the values
 // handleAdd functions is passed to the Main.js->form as a props
  handleAddInput = (fields) =>{
     let products = this.state.products;
         products.push (fields)
         this.setState({products});
         console.log(this.setState({products}));
  }

  // functions to delete the values
  // handleDelete functions is passed to the Main.js->form as a props
  handleDelete = (e) =>{
     let listIndex = e.target.value;
     console.log(listIndex);
     let products = this.state.products;
         products.splice (listIndex,1);
         this.setState({products});
         console.log(this.setState({products}));


  }

  // functions to edit the values
  // handleEdit functions is passed to the Main.js->form as a props
  handleUpdateInput = (newProduct, index) =>{
    console.log('newProduct', newProduct)
    console.log('index', index)


    this.setState(prevState => {
      return {products: [...prevState.products.slice(0, index), newProduct, ...prevState.products.slice(index + 1)]}
     })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <div className="main-content">
            <Main  products={this.state.products}
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
