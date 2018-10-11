
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
// const composeEnhancers = composeWithDevTools({
//     // Specify name here, actionsBlacklist, actionsCreators and other options if needed
//   });
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
//   ));

const store = createStore(rootReducer, 
  applyMiddleware(thunk)
);

  export default store;