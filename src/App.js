import React from 'react';
import Main from './Main'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
					<div>
						<Route exact path="/" component={Main} />
					</div>
				</Router>
    </div>
  );
}

export default App;
