import React from "react";
import comment from "./media/comment.jpg";
import retweet from "./media/retweet.jpg";

const card = ({ dataa }) => (
  <div
    style={{
      width: "100%",
      padding: "15px",
    }}
    className="col-md-4"
  >
    <div
      className="card"
      style={{
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      }}
    >
      <div className="card-body">
        <table style={{ display: "inline" }}>
          <tr>
            <td>
              <img
                src={dataa.image_link}
                style={{ display: "inline", borderRadius: "50%" }}
                height="50px"
                width="50px"
                alt="..."
              />
            </td>
            <td>
              <h5 className="card-title" style={{ display: "inline" }}>
                {dataa.name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                @{dataa.username}
              </h6>
            </td>
          </tr>
        </table>
        <i style={{ float: "right" }}>{dataa.createdAt.substring(0, 10)}</i>
        <p className="card-text">{dataa.text}</p>
        <img src={comment} style={{ width: "40px", height: "40px" }} />
        <small>{dataa.favourites_count}</small>
        <img src={retweet} style={{ width: "40px", height: "40px" }} />
        <small>{dataa.retweet_count}</small>
      </div>
    </div>
  </div>
);
export default card;
