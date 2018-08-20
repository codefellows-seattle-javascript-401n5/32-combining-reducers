import React, { Component, Fragment } from 'react';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseContainer from '../expense-container';
export default class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    }
  }
  updateView = () => {
    this.setState({view: true});
  }
  returnView = () => {
    this.setState({view: false});
  }
onDelete = () => {
      this.props.onRemove(this.props.expense);
    }
  
 expenseUpdate = (expense) => {
  this.props.onComplete(expense);
  }

  render() {
      return(
        <Fragment>
          <div onDoubleClick={this.updateView}>
            <li>
              <h3>{this.props.expense.name}</h3>
            </li>
            <li>
              <h3>${this.props.expense.price}.00</h3>
            </li>
            <button onClick={this.onDelete}>Delete</button>
      {this.state.view && <div><ExpenseForm onComplete={this.expenseUpdate} expense={this.props.expense} onClick={this.props.returnView} buttonText = 'edit expense'/><button onClick={this.returnView}>cancel update</button></div>}
          </div>
          
        </Fragment>
      );
      
  }
}