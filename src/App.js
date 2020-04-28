import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/app.scss'

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
      <Footer />
    </HashRouter>
  )
}

export default App
