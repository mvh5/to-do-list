import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './components/row';
import AddToDo from './components/addToDo';
import IntroTabs from './components/introTabs';
import SearchRow from './components/searchRow';
import TodosPage from './components/todosPage';
import TodosPage2 from './components/todosPage2';

import {BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <IntroTabs></IntroTabs>
      <Route exact path="/todo" component={TodosPage2} />
      
      <Route exact path="/search" component={SearchRow} />
      
      </Router>
  );
}

export default App;
