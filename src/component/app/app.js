import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
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
                  <Fragment>
                    <ul>
                      <li><Link to="/">CategoryContainer</Link></li>
                    </ul>
                    <div>
                      <Route exact path="/" component={CategoryContainer}/>
                    </div>
                  </Fragment>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}