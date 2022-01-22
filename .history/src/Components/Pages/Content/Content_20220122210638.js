import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import withAuth from "../../../helpers/AuthUser";
import { GetContentsRoute, SignUpRoute } from "../../../network/services";

function Content() {
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    let _user = JSON.parse(localStorage.getItem("user"));
    if (_user) {
      GetContentsRoute({ setContent, token: _user.token });
    }
  }, []);

  return (
    <div className="main">
      <h1>My content</h1>

      <h2>Colloection Name</h2>
      <div className="card-wrapper">
        {content
          ? content.map((c) => {
              return (
                <div className="card" key={c._id} onClick={()=>navigate(`/${c._id}`)}  >
                  <div
                    className="cardImg"
                    style={{
                      backgroundImage: `url(${c.contentThumbnail ?? ""})`,
                    }}
                  ></div>
                  <h5>{c.contentTitle}</h5>
                </div>
              );
            })
          : ""}
      </div>
      <h1>Other Content</h1>
    </div>
  );
}

export default withAuth(Content);
