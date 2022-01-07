import { React, useState, useContext , useEffect} from "react";
import Program from "./Program";
import ProgramStateContext from '../../../Utilities/Context'
import items from './Data'


function Programs() {
  
  const { programState, setProgramState } = useContext(ProgramStateContext);

  const onChangeHandler=()=>{
    // console.log(programState)
    setProgramState(false)
  }

  useEffect(()=>{
    setProgramState(true)
},[programState])
  
  return (
    <div className="main">
    <h1>My Program</h1>
    <div className="card-wrapper">
    
    {items.map((elem,i)=>{
     return <div className="card" onClick={onChangeHandler}>
      <div className="cardImg"></div>
      <h5>How to lose 10kgs in a week</h5>
    </div>
    })}
  
    </div>
    <h1>Other Programs</h1>
  </div>  
  );
}

export default Programs;
