import React from 'react'
import Session from './Session'
function Live() {
    return (
        <div className="main">
        <h1>Upcoming Live Sessions</h1>
        <div className='date'>
        <p>Wednesday, 22 September 2021</p>
        </div>
       <div className='session-wrapper'>
         <Session/>
         <Session/>
         <Session/>
       </div>
      </div>
    )
}

export default Live
