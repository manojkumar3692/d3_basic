import logo from './logo.svg';
import React,{useRef,useEffect} from 'react';
import './App.css';
import * as d3 from 'd3';

// Chats 
import VerticalChart from './component/VerticalBar.js'
function App() {
  return (
    <div className="App">
      <VerticalChart/>
    </div>
  );
}

export default App;
