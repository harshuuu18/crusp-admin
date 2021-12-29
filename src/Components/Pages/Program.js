import {React, useContext, useEffect} from 'react'
import Batch from './Batch'
import ProgramStateContext from '../../Utilities/Context'

function Program() {
    const {programState, setProgramState } = useContext(ProgramStateContext);
    
    const onChangeHandler=()=>{
        setProgramState(true)
      }

    useEffect(()=>{
        setProgramState(false)
    },[])

    return (
        <div className='main'>
        <p id="back" onClick={onChangeHandler}>Go Back</p>
         <h1>My Programs</h1>   
         <div className='program-img'>
        </div>         
        <h2 className='title'>ABC Program</h2>
        <p>Description</p>
        <h2 className='title'>Your Batch</h2>
        <Batch/>
        </div>
    )
}

export default Program
