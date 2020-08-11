import React from 'react';

import Chat from './components/chat/Chat';
// import Join from './components/Join/Join';
import WelcomePage from './components/WelcomePage/WelcomePage'

import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage/WelcomePage';

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      { <Route path="/" exact component={WelcomePage} />
      /*<Route path="/chat" component={Chat} /> */}
=======
      <Route path="/" exact component={WelcomePage} />
      <Route path="/chat" component={Chat} />
>>>>>>> b653948acdfc634e71949906374cf5d27d5db1e9
    </Router>
  );
}

export default App;