import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import Feed from './components/Feed'
import Homepage from './components/Homepage'
import AppState from './context/AppState'

function App() {
  return (
    <div className='App'>
      <h1>Context Examples</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/feed'>Feed</Link>
            </li>
            <li>
              <Link to='/'>Counter</Link>
            </li>
          </ul>
        </nav>
        <AppState>
          <Switch>
            <Route exact path='/' component={Counter} />
            <Route path='/feed' component={Feed} />
            <Route path='/home' component={Homepage} />
          </Switch>
        </AppState>
      </Router>
    </div>
  )
}

export default App
