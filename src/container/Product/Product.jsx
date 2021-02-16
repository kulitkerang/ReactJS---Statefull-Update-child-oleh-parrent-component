import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css'

class Product extends Component{
    state = {
        order: 4
    }

    HandleCounterChange = (newValue) => {
        this.setState({
            order : newValue
        })
    } 

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://digitaraya.com/assets/img/startups/etanee.png" alt="logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://static.thenounproject.com/png/1138102-200.png" alt="troley"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                
                <CardProduct onCounterChange={(Value)=>this.HandleCounterChange(Value)}/>
                
                </Fragment>
                )
            }
        }

export default Product;