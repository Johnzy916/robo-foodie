import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { login, setUserName, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import { checkPlaces } from './actions/places';
import 'normalize.css';
import './styles/styles.scss';


const store = configureStore();

// render variables
const appJsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
);
const appRoot = document.getElementById('app');

// check if rendered - don't render if already rendered
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(appJsx, appRoot);
    hasRendered = true;
  }
}

// loading gif
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// change of login state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    
    store.dispatch(login(user.uid));
    store.dispatch(setUserName(user.displayName));
    
    // get stuff from database before rendering
    store.dispatch(checkPlaces())
      .then(() => {
        renderApp();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
      
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});