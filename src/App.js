import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import AuthorDetails from './AuthorDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/create' exact>
              <Create />
            </Route>
            <Route path='/blog/:id' exact>
              <BlogDetails />
            </Route>
            <Route path='/author/:id' exact>
              <AuthorDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
