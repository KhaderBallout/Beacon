import React from 'react';

<<<<<<< HEAD
import Chat from './components/chat/Chat';
// import Join from './components/Join/Join';

=======
// import Chat from './components/Chat/Chat';
import WelcomePage from './components/WelcomePage/WelcomePage';
>>>>>>> ae34831f469515ab8ed2d4b5de2fc069bb9e307c
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
     {/* <Route path="/" exact component={Join} /> */}
     <Route path="/chat" component={Chat} /> 
=======
      <Route path="/" exact component={WelcomePage} />
      {/* <Route path="/chat" component={Chat} /> */}
>>>>>>> ae34831f469515ab8ed2d4b5de2fc069bb9e307c
    </Router>
  );
}

export default App;