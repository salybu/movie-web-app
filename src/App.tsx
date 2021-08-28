import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Nav from 'components/common/Nav';
import { Provider } from 'react-redux';
import store from 'redux/create';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route path='/' exact component={Home}></Route>
        <Route path='/signin' component={SignIn}></Route>
        <Route path='/signup' component={SignUp}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
