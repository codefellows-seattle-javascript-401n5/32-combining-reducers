import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4';
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
        this.props.onComplete(this.state);//coming from parent (dashboard)
        this.setState({ ...this.state, id: uuid }); //FIXME:{categoryID: props.category.name} add this value in somehow
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
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input name="name" placeholder="expense name" value = {this.state.name}/>
                <input name="price" type="number" value = {this.state.price}/>
                <button>submit expense</button>
            </form>
            </fieldset>
        );
    }
}