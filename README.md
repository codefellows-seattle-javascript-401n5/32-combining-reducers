# Budget Tracker Redux Combining Reducers lab 32

PR: https://github.com/Lennerblom/32-combining-reducers/pull/1
---
   This Budget app was created using React and Redux and used the `combineReducers()` function from Redux. 
   
   You can set a budget category and add expenses to that category.  Each form takes a name and number input.  On submit, it will display the category and budget, or expense and price.  On double clicking the text an update option will display.  You can also delete the entry entirely.  There is no built in persistance so if you refresh the page, its gone.

  There are two reducers; `category`, and `expense`, that are the arguments for the `combineReducers()` function.  Both states are then returned as an object, each as its own key.