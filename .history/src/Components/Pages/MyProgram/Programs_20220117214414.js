import { React, useState, useContext, useEffect } from "react";
import Program from "./Program";
import ProgramStateContext from "../../../Utilities/Context";
import items from "./Data";
import {
  GetProgramByIdRoute,
  GetProgramsRoute,
} from "../../../network/services";

function Programs() {
  const { programState, setProgramState } = useContext(ProgramStateContext);
  const [user, setUser] = useState("");
  const [program, setProgram] = useState("");

  const onChangeHandler = (_id) => {
    // console.log(programState)
    GetProgramByIdRoute({
      progromId: _id,
      setProgramState,
      token: user.token,
    });
  };

  useEffect(() => {
    let _user = JSON.parse(localStorage.getItem("user"));
    if (_user) {
      setUser(_user);
      GetProgramsRoute({ setProgram, token: _user.token });
    }
  }, [programState]);

  return (
    <div className="main">
      <h1>My Program</h1>
      <div className="card-wrapper">
        {program
          ? program?.myPrograms.programsPurchased.map((elem, i) => {
              return (
                <div
                  className="card"
                  onClick={() => onChangeHandler(elem._id)}
                  key={i}
                >
                  <div
                    className="cardImg"
                    style={{
                      backgroundImage: `url(${elem.programThumbnail ?? ""})`,
                    }}
                  ></div>
                  <h5>{elem?.programTitle}</h5>
                </div>
              );
            })
          : ""}
      </div>
      <h1>Other Programs</h1>
      <div className="card-wrapper">
        {program
          ? program?.programs.map((elem, i) => {
              return (
                <div
                  className="card"
                  onClick={() => onChangeHandler(elem._id)}
                  key={elem._id}
                >
                  <div
                    className="cardImg"
                    style={{
                      backgroundImage: `url(${elem.programThumbnail ?? ""})`,
                    }}
                  ></div>
                  <h5>{elem.programTitle}</h5>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Programs;
