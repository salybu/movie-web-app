import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Nav from 'components/common/nav/Nav';
import { Provider } from 'react-redux';
import store from 'redux/create';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route path='/' component={Home}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
