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

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: "#48cbff", height: "100vh" }}>
          <Routes>
            <Route exact path="/" page={LandingPage} />
            <Route path="/shopping-list" component={ShoppingList} />
            <Route path="/item-details/:id" component={ItemDetails} />
            <Route path="/categories" component={Categories} />
            <Route path="/search" component={Search} />
            <Route path="/sorting-filtering" component={SortingFiltering} />
            <Route path="/multiple-lists" component={MultipleLists} />
            <Route path="/share-list" component={ShareList} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;