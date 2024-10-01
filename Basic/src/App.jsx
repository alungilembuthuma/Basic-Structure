import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './components/store';
import ShoppingList from './components/ShoppingList';
import ItemDetails from './components/ItemDetails';
import Categories from './components/Categories';
import Search from './components/Search';
import SortingFiltering from './components/SortingFiltering';
import MultipleLists from './components/MultipleLists';
import ShareList from './components/ShareList';
import List from './components/List';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" >
        
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/item-details/:id" element={<ItemDetails />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/ShoppingList" element={<ShoppingList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;