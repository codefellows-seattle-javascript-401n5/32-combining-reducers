import React, { Component, Fragment } from 'react';
export default class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.defaultState = {
            timestamp: Date.now(),
            name: '',
            price: 0,
        }
        const initialState = this.props.expense || this.defaultState;

        this.state =  {...initialState};
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.onComplete(this.state);
        this.setState({ ...this.state, categoryID: ''}); //FIXME:{categoryID: props.category.name} add this value in somehow
        console.log('Expense form', this.state);
      };
    
      onChange = (e) => {
        const val =
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
    
      const changedBit = {
        [e.target.name]: val
      };
      this.setState(changedBit);
      }
    render() {
        return (
            <fieldset>
                <button onClick={this.props.closeExpense}>X</button>
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input name="name" placeholder="expense name" value = {this.state.name}/>
                <input name="price" type="number" value = {this.state.price}/>
                <button onClick={this.props.returnView}>{this.props.buttonText}</button>
            </form>
            </fieldset>
        );
    }
}