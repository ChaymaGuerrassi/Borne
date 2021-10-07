import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Views/Home';
import HomeButton from './Components/HomeButton';
import Category from './Views/Category'
import { BasketContext } from './BasketContext';

import './App.css'

function App() {

  const [basketList, setBasketList] = useState([])

  return (
    <BasketContext.Provider value={{
      basketList,
      setBasketList
    }}> 

      <div className="App">

        <Router>
          <HomeButton />

            <Switch>

              <Route exact path='/'>

                  <Home />

              </Route>

              <Route path='/category/:id' children={<Category />}>

                  <Category />

              </Route>

            </Switch>

          <Navbar />
        </Router>   
      </div>
    </BasketContext.Provider>
  )
}

export default App
