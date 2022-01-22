import { React, useState, useContext } from "react";
import Program from "./Program";
import Programs from "./Programs";
import ProgramStateContext from "../../../Utilities/Context";

function MyProgram() {
  const [programState, setProgramState] = useState("");
  return (
    <>
      <ProgramStateContext.Provider value={{ programState, setProgramState }}>
        {programState ? <Program /> : <Programs />}
      </ProgramStateContext.Provider>
    </>
  );
}

export default MyProgram;
