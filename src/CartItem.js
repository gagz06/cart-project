import React from "react";

//class CartItem extends React.Component
const CartItem = (props)=>{
    
        //console.log('this.props',this.props);
        const {price,title,qty,img}= props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,handleDeleteProduct}=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="img"/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-action">
                        {/* {Button} */}
                        <img alt="increase" className="action-icons" src="https://cdn.iconscout.com/icon/free/png-512/free-plus-1912207-1617676.png?f=webp&w=256"
                        // onClick={this.increaseQuantity.bind(this)}
                        //</div>onClick={this.increaseQuantity}>
                        onClick={()=>onIncreaseQuantity(product)}>
                        </img>
                        <img alt="decrease" className="action-icons" src="https://www.svgrepo.com/show/8923/minus.svg"
                        onClick={()=>onDecreaseQuantity(product)}></img>
                        <img alt="delete" className="action-icons" src="https://cdn.iconscout.com/icon/free/png-512/free-delete-1912233-1617702.png?f=webp&w=256"
                         onClick={()=>handleDeleteProduct(product.id)}></img>
                    </div>
                </div>
            </div>
        );
    
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