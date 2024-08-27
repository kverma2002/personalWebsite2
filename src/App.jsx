import React from 'react'
import Bio from './components/Bio'
import Content from './components/Content'
import './output.css'

function App() {

  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <Bio/>
        <Content/>
      </div>

    </div>
    
  )
}

export default App
