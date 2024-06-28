import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor(){
        super();
    this.state={
     products:[
        {
            price:999,
            title:'Phone',
            qty:10,
            img:'',
            id:1
        },
        {
            price:9923239,
            title:'Lappy',
            qty:22,
            img:'',
            id:2
        },
        {
            price:1299,
            title:'Watch',
            qty:4,
            img:'',
            id:3
        }
     ]   
    }
    }

    handleIncreaseQuantity=(product)=>{
      console.log('Prod',product);
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;
      this.setState({
        products:products
      });
    }
    handleDecreaseQuantity = (product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      if (products[index].qty>1) {
        products[index].qty-=1;
      }
      else{
        alert('Atleast one item should be there');
      }
      this.setState({
        products:products
      });
    }
    handleDeleteCartItem = (id)=>{
      const {products}=this.state;
      const newProd=products.filter((item)=>item.id!==id);
      this.setState({
        products:newProd
      })
    }
  render() {
    const { products }= this.state;
    return (
      <div className="cart">
        {
            products.map((prod)=>{
                return <CartItem 
                product={prod} 
                key={prod.id} 
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                handleDeleteProduct={this.handleDeleteCartItem}
                />
            })
        }
      </div>
    );
  }
}

export default Cart;
