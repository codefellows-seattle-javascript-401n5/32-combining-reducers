import React, { Component, Fragment } from 'react';

export default class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            price: 0.00,
        }
    }
    onSubmit = event => {
        event.preventDefault();
        this.props.onComplete(this.state);//coming from parent (dashboard)
        //this.setState({ ...this.state, name});FIXME:
        console.log(this.state);
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
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input name="expenseName" placeholder="expense name" value = {this.state.name}/>
                <input name="price" type="number" value = {this.state.price}/>
            </form>
        );
    }
}