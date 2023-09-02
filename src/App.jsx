import React from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='p-5'>
      <Navbar />
      <Content />
    </div>
  )
}

export default App