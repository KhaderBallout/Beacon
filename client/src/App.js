import React from 'react';

// import Chat from './components/Chat/Chat';
import Message from './components/Messages/Message/Message';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
       <Route path="/" exact component={Message} />
    {/*<Route path="/chat" component={Chat} /> */}
    </Router>
  );
}

export default App;