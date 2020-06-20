import React from "react";
import { useHistory } from "react-router-dom";
import Twitter1 from "./media/twitter2.gif";

const InputPage = (props) => {
  const history = useHistory();
  const [profileRedirect, setprofileRedirect] = React.useState(false);
  const [TagRedirect, setTagRedirect] = React.useState(false);
  const [profileName, setprofileName] = React.useState("");

  const onChangeHandler1 = (event) => {
    setTagName("");
    setprofileRedirect(true);
    setTagRedirect(false);
    setprofileName(event.target.value);
  };
  const [TagName, setTagName] = React.useState("");

  const onChangeHandler2 = (event) => {
    setprofileName("");
    setTagRedirect(true);
    setprofileRedirect(false);
    setTagName(event.target.value);
  };
  const onClick1 = () => {
    let uri = `/results/profile/${profileName}`;
    if (profileRedirect) {
      history.push(uri);
    }
  };
  const onClick2 = () => {
    let urii = "/results/tags/" + TagName;
    if (TagRedirect) {
      history.push(urii);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4"></div>

        <div
          className="col-lg-4 col-lg-offset-4"
          style={{ textAlign: "center" }}
        >
          <div className="input-group" style={{ padding: "10px" }}>
            <img src={Twitter1} style={{ marginTop: "10px" }} />

            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="text"
              name="profile"
              onChange={onChangeHandler1}
              value={profileName}
              placeholder="Enter profile handle..."
            />
            <div className="input-group-btn" style={{ padding: "10px" }}>
              <button
                className="btn btn-default"
                onClick={onClick1}
                style={{ padding: "10px" }}
              >
                Find Tweets
              </button>
            </div>
          </div>
          <div className="input-group" style={{ padding: "10px" }}>
            <input
              style={{ padding: "10px" }}
              className="form-control"
              type="text"
              name="tag"
              onChange={onChangeHandler2}
              value={TagName}
              placeholder="Enter tags..."
            />
            <div className="input-group-btn" style={{ padding: "10px" }}>
              <button
                className="btn btn-default"
                onClick={onClick2}
                style={{ padding: "10px" }}
              >
                Find Tag
              </button>
            </div>
          </div>

          <center>
            <h4 style={{ marginTop: "40px" }}>KARTIK AGARWAL</h4>
          </center>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
