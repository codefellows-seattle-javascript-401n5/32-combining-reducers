import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from '../../lib/store';
import CategoryContainer from '../category-container';

const store = createStore();
console.log('state LOG: ', store.getState())

export default class App extends Component {

    render() {
        return(
            <div>
              <Provider store={store}>
                <BrowserRouter>
                    <div>
                      <Route exact path="/" component={CategoryContainer}/>
                    </div>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}