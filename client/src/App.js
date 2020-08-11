import React from 'react';

// import Chat from './components/Chat/Chat';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={WelcomePage} />
      {/* <Route path="/chat" component={Chat} /> */}
    </Router>
  );
}

export default App;