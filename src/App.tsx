import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/create';
import { Home, SignIn, SignUp, Member, MovieDetail } from 'pages';
import { Nav } from 'components/common';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Route path='/' exact component={Home}></Route>
        <Route path='/signin' component={SignIn}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/member' component={Member}></Route>
        <Route path='/movie/:id' component={MovieDetail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
