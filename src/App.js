import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <div className="bg-container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
