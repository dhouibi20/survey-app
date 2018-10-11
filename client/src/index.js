import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import App from './components/App';



ReactDOM.render(
<Provider store={store} >
<App />
</Provider>,
    document.getElementById('root')
    );

    console.log('dddd', process.env.REACT_APP_STRIPE_KEY)