import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from "./apolloClient";
import StopSelection from "./components/stopSelection";
import './App.css';




function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <header className="App-header">
           <StopSelection />
      </header>
    </div>
      </ApolloProvider>
  );
}

export default App;
