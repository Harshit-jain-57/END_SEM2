import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Slider2 from './components/Slider2'
import ProductGrid from './components/ProductGrid'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Slider2 />
      <ProductGrid />
      <SearchBar />
      <Footer />
    </div>
  )
}

export default App
