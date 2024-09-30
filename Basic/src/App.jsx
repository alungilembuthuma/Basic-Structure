import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import ShoppingList from './components/ShoppingList';
import ItemDetails from './components/ItemDetails';
import Categories from './components/Categories';
import Search from './components/Search';
import SortingFiltering from './components/SortingFiltering';
import MultipleLists from './components/MultipleLists';
import ShareList from './components/ShareList';
import List from './components/List';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ backgroundColor: "#48cbff",  height: "100vh" }}>

        <List/>
           {/* <main>
           <ShoppingList />
          <ItemDetails />
          <Categories />
          <Search />
          <SortingFiltering />
          <MultipleLists />
          <ShareList />
        </main> */}
      </div>
    </Provider>
  );
}

export default App;