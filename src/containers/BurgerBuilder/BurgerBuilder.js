import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/Ordersummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon:  0.4,
    cheese: 1.3,
    meat: 0.7
}

class BurgerBuilder extends Component {
   
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        basePrice : 4,
        purchaseable : false, // use to toggle disable order button
        purchasing : false // used when click on order button , purchasin g will be true modal will open
    }

    updatePurchaseState = (ingredients) => {
        //method used to update purchase state to enable or disable 
        //ORDER button 
       const sum = Object.values(ingredients).reduce((sum,amt)=> {
           return sum + amt
       },0)
       this.setState({purchaseable : sum> 0})
    }


    addIngredientHaandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.basePrice;
        const priceAdd = INGREDIENT_PRICE[type]
        const newPrice = priceAdd + oldPrice;
        this.setState({
            basePrice : newPrice,
            ingredients : updatedIngredients
        })
        //after adding ingredients updating purchasble state 
        this.updatePurchaseState(updatedIngredients) 
    }
    removeIngredientHaandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.basePrice;
        const pricededuct = INGREDIENT_PRICE[type]
        const newPrice = oldPrice-pricededuct;
        this.setState({
            basePrice : newPrice,
            ingredients : updatedIngredients
        })
        //after removing ingredients updating purchasble state 
        this.updatePurchaseState(updatedIngredients) 
    }

    purchaseHandler =()=> { // handler used on order button
        this.setState({purchasing : true})
    }

    modalClosedHandlerClickedOnBackdrop = () => { //after opening modal, clicking on outside of modal
        //i.e backdrop to close the modal by 'purchasing' state to false 
        this.setState({purchasing : false})
    }
    modalCancelButtonHandler = () => {
        this.setState({purchasing : false})
    }
    modalContinueButtonHandler =() => {
        alert("Yes !! continue ...")
    }


    render () {
        const disableInfo = {
            ...this.state.ingredients
        }
        for(let el in disableInfo) {
            disableInfo[el] = disableInfo[el] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} 
                    modalClosed={this.modalClosedHandlerClickedOnBackdrop}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelHandler={this.modalCancelButtonHandler}
                    purchaseContinueHandler={this.modalContinueButtonHandler}
                    totalPrice={this.state.basePrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                addIngredient = {this.addIngredientHaandler}
                removeIngredient = {this.removeIngredientHaandler}
                disableInfo={disableInfo}
                price={this.state.basePrice}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;