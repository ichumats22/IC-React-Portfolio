import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Main from './pages/Main'
import ProjectDetail from './pages/ProjectDetail'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/:id' component={ProjectDetail} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
