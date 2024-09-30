
import React from 'react';
import { Provider } from 'react-redux';
import store from './features/store';
import ShoppingList from './components/ShoppingList';
import ItemDetails from './components/ItemDetails';
import Categories from './components/Categories';
import Search from './components/Search';
import SortingFiltering from './components/SortingFiltering';
import MultipleLists from './components/MultipleLists';
import ShareList from './components/ShareList';
import Auth from './components/Auth';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping List App</h1>
        <Auth />
        <ShoppingList />
        <ItemDetails />
        <Categories />
        <Search />
        <SortingFiltering />
        <MultipleLists />
        <ShareList />
      </div>
    </Provider>
  );
}

export default App;