import React from 'react';
import './App.css';

import {Provider} from 'react-redux' 


import store from './store/store';
import Main from './Pages/Main';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <Main/>
      </div>
    </Provider>
    
  );
}

export default App;
