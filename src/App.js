import React from 'react'
import SignUp from './component/SignUp';
import "./App.css"

const App = () => {
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-5'>
              <SignUp/>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
