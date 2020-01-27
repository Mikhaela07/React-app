import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './components/redux/State';

let rerendeEntireTree=(state)=>{
ReactDOM.render(<App State={state} dispatch={store.dispatch.bind(store)} store={store} />, document.getElementById('root'));
}
rerendeEntireTree(store.getState());
store.subscribe(rerendeEntireTree);
serviceWorker.unregister();
