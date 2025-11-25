import { useState } from 'react'
import { useReducer } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
 
import Aboutpage
from './components/Aboutpage'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Order from './components/Order'
import Login from './components/Login'
import Confirm from './components/confirm'
import {Routes,Route} from 'react-router-dom'

import './App.css'


 

function App() {
 
  
var initialState=  ['17:00','18:00'];
 
function reducer(state,action){
  if(action.type=='clicked')
  {
return(
  initialState=['16:00',...state]
)


  }

}
 
const[state,dispatch]=useReducer(reducer,initialState);
console.log(state);

  return (
  <>
  <div className='app'>
  <Header/>
  <main>
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about-page' element={<Aboutpage/>}/>
           <Route path='/menu-page' element={<Menu/>}/>
           <Route path='/reserve-page' element={<Reservation  state={state} dispatch={dispatch}  />}/>
           <Route path='/order-page' element={<Order/>}/>
           <Route path='/login-page' element={<Login/>}/>
            <Route path='/confirm-page' element={<Confirm/>}/>
    
          </Routes>
  </main>
  <Footer/>
  </div>
 

  </>

  );
}

export default App;
