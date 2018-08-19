import React from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import App from './app';

it('renders without crashing', () => {
  let h1 = document.createElement('h1');
  ReactDOM.render(<App />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});