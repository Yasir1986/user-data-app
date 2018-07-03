import React, { Component } from 'react';


class Main extends Component {
  constructor(props){
      super(props);
        this.state = {
          name : "",
          price: "",
          description: "",
          editing: false

        }
    }

edit = (e) =>{
  let index=e.target.value;
  let name =this.props.products[index].name;
  let price=this.props.products[index].price;
  let description=this.props.products[index].description;
  this.setState({
          index,
          name:name,
          price:price,
          description:description,
          editing: !this.state.editing
        })
  console.log("Editing");
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
          name: this.state.name,
          price: this.state.price,
          description: this.state.description
        }, this.state.index)
}

renderNormal = () =>{
   let products= this.props.products.map((product, index) => 
                                        <li key={index} className="list-items-display"> 
                                         <b>Name:</b> {product.name} <br />
                                         <b>Price:</b> {product.price} <br />
                                         <b>Description:</b> {product.description} <br />
                                        <button onClick={this.props.handleDelete} value={index}>Remove</button>
                                        <button onClick={this.edit} value={index} >Edit</button>
                                        </li>);
    return (
      <div className="main-content">
        <div className="form-area">
          <form>

            <label>
                Product Name:
                <input type="text" 
                       name="name"
                       value={this.state.name}
                       onChange={this.onChange} />
            </label>

            <label>
                Product Price:
                <input type="text" 
                       name="price"
                       value={this.state.price}
                       onChange={this.onChange} />
            </label>

            <label>
                Product Description:
                <input type="text" 
                       name="description"
                       value={this.state.description}
                       onChange={this.onChange} />
            </label>

        <button onClick={this.handleAddInput}>Submit</button>
          </form>

         </div> 

         <div className="item-display">
            <h1>List of Items</h1>
            <p>{products}</p>
          </div>

      </div>
    );
}

renderEdit =() =>{
     let products= this.props.products.map((product, index) => 
                                        <li key={index.toString()} className="list-items-display"> 
                                        <b>Name:</b> {product.name} <br />
                                        <b>Price:</b> {product.price} <br />
                                        <b>Description:</b> {product.description} <br />
                                        <button onClick={this.props.handleDelete} value={index}>Remove</button>
                                        <button onClick={this.edit} value={index.toString()}>Edit</button>
                                        </li>);
    return (
      <div className="main-content-area">
        <div className="form-area">
          <form>

            <label>
                Product Name:
                <input type="text" 
                       name="name"
                       value={this.state.name}
                       onChange={this.onChange} />
            </label>

            <label>
                Product Price:
                <input type="text" 
                       name="price"
                       value={this.state.price}
                       onChange={this.onChange} />
            </label>

            <label>
                Product Description:
                <input type="text" 
                       name="description"
                       value={this.state.description}
                       onChange={this.onChange} />
            </label>

            <button onClick={this.handleUpdateInput}>Submit</button>
          </form>

         </div> 

         <div className="item-display">
            <h1>List of Items</h1>
            <p>{products}</p>
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
