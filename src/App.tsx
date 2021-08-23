import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Nav from 'components/common/nav/Nav';
import { Provider } from 'react-redux';
import store from 'redux/create';
import Login from 'pages/Login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' component={Login}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
