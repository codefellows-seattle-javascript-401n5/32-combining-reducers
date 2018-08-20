import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {expenseCreate, expenseDelete, expenseUpdate} from '../reducer/expense';
import ExpenseForm from './expense-form/expense-form';
import ExpenseItem from './expense-item/expense-item';

 const ExpenseContainer = (props) => {

    return(
      <Fragment>
        <h1>exp cont.</h1>
        <ExpenseForm onComplete={props.expenseCreate} buttonText='submit'/>
    <ul>
      {props.expense.map(expense => (
        <ExpenseItem expense={expense} key={expense.id} onComplete={props.expenseUpdate} onRemove={props.expenseDelete}/>
      ))}
    </ul>
      </Fragment>
      );
}

const mapStateToProps = (state) => ({ 
  //category: state.category,
  expense: state.expense,
 });

const mapDispatchToProps = (dispatch) => ({
  expenseCreate: expense => dispatch(expenseCreate(expense)),
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseContainer);