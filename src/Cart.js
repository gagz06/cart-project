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
            qty:1,
            img:'',
            id:1
        },
        {
            price:9923239,
            title:'Lappy',
            qty:1,
            img:'',
            id:2
        },
        {
            price:1299,
            title:'Watch',
            qty:1,
            img:'',
            id:3
        }
     ]   
    }
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
                
                />
            })
        }
      </div>
    );
  }
}

export default Cart;
