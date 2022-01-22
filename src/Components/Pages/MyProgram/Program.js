import { React, useContext, useEffect } from "react";
import Batch from "../Batch/Batch";
import ProgramStateContext from "../../../Utilities/Context";
// import items from './Data'

function Program() {
  const { programState, setProgramState } = useContext(ProgramStateContext);
  // const [items, setItems] = useState(items)

  const onChangeHandler = () => {
    setProgramState(false);
  };

  if (!programState) {
    return <h1>Loading....</h1>;
  }
  const {
    feeDetails,
    batches,
    isPaid,
    modules,
    programDescription,
    programThumbnail,
    programTitle,
    programType,
    status,
  } = programState;
  return (
    <div className="main">
      <p id="back" onClick={onChangeHandler}>
        Go Back
      </p>
      <h1>My Programs</h1>

      <div className="program-img"></div>
      <h2 className="title">{programTitle}</h2>
      <p>{programDescription}</p>
      <h2 className="title">Your Batch</h2>
      {batches.length ? <Batch batchData={batches} /> : ""}
    </div>
  );
}

export default Program;
