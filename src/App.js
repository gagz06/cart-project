import Cart from "./Cart";
import Navbar from "./NavBar";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 10,
          img: "",
          id: 1,
        },
        {
          price: 23239,
          title: "Lappy",
          qty: 22,
          img: "",
          id: 2,
        },
        {
          price: 1299,
          title: "Watch",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("Prod", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 1) {
      products[index].qty -= 1;
    } else {
      alert("Atleast one item should be there");
    }
    this.setState({
      products: products,
    });
  };
  handleDeleteCartItem = (id) => {
    const { products } = this.state;
    const newProd = products.filter((item) => item.id !== id);
    this.setState({
      products: newProd,
    });
  };

  getCarCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty      
    })
    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let finalPrice=0;
    products.map((product)=>{
      finalPrice+=finalPrice+product.qty*product.price;
    })
    return finalPrice;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCarCount()} />
        <h1>Cart</h1>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          handleDeleteProduct={this.handleDeleteCartItem}
        />
        <div>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
