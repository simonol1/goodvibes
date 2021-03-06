import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import AddVibeForm from './AddVibeForm'
import VibeList from './VibeList'
import Footer from './Footer'

const App = () => (
  <div className='app-container'>
    <Header />
      <Router>
         <div>
           <Route exact path="/" component={AddVibeForm} />
           <Route exact path="/" component={VibeList} />
        </div>
      </Router>
    <Footer />
</div>
)

export default App
