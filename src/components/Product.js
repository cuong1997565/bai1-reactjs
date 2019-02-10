import React, { Component } from 'react';
class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart (){
        alert(this.props.children + '-' + this.props.price);
    }
  render() {
    return (
    <div className="Product">
        <div className="col-xs-4">
        <div className="thumbnail">
           <img alt= {this.props.image} src= {this.props.image}  />
            <div className="caption">
                <h3>Tên sản phẩm :  {this.props.children} </h3>
                <p> Giá : {this.props.price }  Đ </p>
                <p>
                    <a className="btn btn-primary" onClick= { this.onAddToCart } >Mua ngay</a>
                </p>
            </div>
       </div>
        </div>
    </div>
    );
  }
}

export default Product;
