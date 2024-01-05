import React from 'react';
import './App.css';
import {Article, Brand , CTA , Feature , Navbar ,  } from './components'
import {Blog, Features , Footer, Header , Possibility , Whatconjer } from './containers'
function App() {
  return (
    <div className="App">
      <div className ="gradient-bg">
       <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <Whatconjer/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
import { formToJSON } from 'axios';

export default App