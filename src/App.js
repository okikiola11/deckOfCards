import React from 'react';
import CardGameBoard from './CardGameBoard';
import { Header, Layout } from './LayoutComponents';

import './App.css';

const App = () => (
    <div className="App">
      <Header />
      <Layout> 
        <CardGameBoard /> 
      </Layout>
    </div>
  );

export default App;