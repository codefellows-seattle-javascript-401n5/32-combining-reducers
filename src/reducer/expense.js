// Actions
export const ADD = 'expense/ADD';
export const UPDATE = 'expense/UPDATE';
export const DELETE = 'expense/DELETE';
// Reducer
let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch(type) {
  case ADD: return [...state, payload];
  case UPDATE: return state.map(expense=> expense.id === payload.id ? payload : expense);
  case DELETE: return state.filter(expense=> expense.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const expenseCreate = (expense) => ({
  type: ADD,
  payload: expense,
});
export const expenseUpdate = expense => ({
  type: UPDATE,
  payload: expense,
});
export const expenseDelete = expense => ({
  type: DELETE,
  payload: expense,
});

