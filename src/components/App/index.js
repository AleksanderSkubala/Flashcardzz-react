import React from 'react';
import { Router } from '@reach/router';

import { UserProvider } from '../../providers/UserProvider';
import Protected from '../Protected';
import Main from '../../views/Main';
import Login from '../../views/Login';

function App() {
  return (
    <UserProvider>
      <Router className="font-mono">
        <Protected path="/" view={<Main/>} />
        <Login path="/login"/>
      </Router>
    </UserProvider>
  );
}

export default App;
