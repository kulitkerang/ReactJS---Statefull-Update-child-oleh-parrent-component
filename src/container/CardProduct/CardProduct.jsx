import React, {Component} from 'react';

class CardProduct extends Component{
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        },() => {
            this.handleCounterChange(this.state.order);
        })
        
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order : this.state.order - 1
            },() => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://w7.pngwing.com/pngs/535/669/png-transparent-dressed-chicken-chicken-meat-buffalo-wing-chicken-leg-raw-foodism-chicken-meat-file-food-beef-hand.png" alt="daging ayam"/>
                        <p className="product-tittle">Daging Ayam Berbumbu Rasa Original Plus Tepung Crispy 1-10pcs</p>
                        <p className="product-price">Rp.410.000</p>
                    </div>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
                )
            }
        }

export default CardProduct;