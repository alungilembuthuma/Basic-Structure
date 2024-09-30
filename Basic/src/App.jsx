import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Auth from './components/Auth';
import ShoppingList from './components/ShoppingList';
import ItemDetails from './components/ItemDetails';
import Categories from './components/Categories';
import Search from './components/Search';
import SortingFiltering from './components/SortingFiltering';
import MultipleLists from './components/MultipleLists';
import ShareList from './components/ShareList';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{backgroundColor:"#48cbff"}}>
        <h1>Shopping List App</h1>
        <Auth />
        <main>
          <ShoppingList />
          <ItemDetails />
          <Categories />
          <Search />
          <SortingFiltering />
          <MultipleLists />
          <ShareList />
        </main>
      </div>
    </Provider>
  );
}

export default App;