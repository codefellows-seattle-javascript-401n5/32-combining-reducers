import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import CatCreateForm from './category-form/category-form';
import CategoryItem from './category-item/category-item';
import {catCreate, catUpdate, catDestroy} from '../action/category-action';

 const CategoryContainer = (props) => {

    return(
      <Fragment>
        <h1>Budget Tracker 32</h1>
        <CatCreateForm onComplete={props.catCreate} buttonText='submit'/>
        
        <ul>
      {props.category.map(category => (
        <CategoryItem category={category} key={category.id} onComplete={props.catUpdate} onDestroy={props.catDestroy}/>
      ))}
    </ul>

    
      </Fragment>
      );
}

const mapStateToProps = (state) => ({ 
  category: state.category,
  // expense: state.expense,
 });

const mapDispatchToProps = (dispatch) => ({
  catCreate: category => dispatch(catCreate(category)),
  catUpdate: category => dispatch(catUpdate(category)),
  catDestroy: category => dispatch(catDestroy(category)),
  // expenseCreate: expense => dispatch(expenseCreate(expense)),
  // expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  // expenseDelete: expense => dispatch(expenseDelete(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);