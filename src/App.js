
import React from 'react';
import { Main } from './views/Main';
//import {Footer} from '../components/Footer';
import './App.css';
import {data} from './data';

function App() {
  return (
    <Main  {...data} />
  );
}

export default App;
