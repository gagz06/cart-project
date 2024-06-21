import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity= this.increaseQuantity.bind(this);
    }
    increaseQuantity = ()=>{
        //console.log(this.state);
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        });
    }

    decreaseQuantity = ()=>{
        const {qty}=this.state;
    if (qty===0) {
            return;
        }
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        })
    }

    render(){
        //console.log('this.props',this.props);
        const {price,title,qty,img}= this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-action">
                        {/* {Button} */}
                        <img alt="increase" className="action-icons" src="https://cdn.iconscout.com/icon/free/png-512/free-plus-1912207-1617676.png?f=webp&w=256"
                        // onClick={this.increaseQuantity.bind(this)}
                        onClick={this.increaseQuantity}></img>
                        <img alt="decrease" className="action-icons" src="https://www.svgrepo.com/show/8923/minus.svg"></img>
                        <img alt="delete" className="action-icons" src="https://cdn.iconscout.com/icon/free/png-512/free-delete-1912233-1617702.png?f=webp&w=256"></img>
                    </div>
                </div>
            </div>
        );
    }
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius: 4,
        border: "solid",
        background:'#ccc'
    }
}

export default CartItem;