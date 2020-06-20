import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Card from "./card";

const initialState = [];
let aaa = 1;

const OutputPage1 = () => {
  const history = useHistory();
  const back = () => {
    history.push("/");
  };
  let [Tweets, setTweets] = React.useState(initialState);
  let [display, setdisplay] = React.useState(false);
  let { profile } = useParams();

  useEffect(() => {
    fetch(`https://tweet-apis.herokuapp.com/profile/${profile}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTweets([]);
        setTweets(data);
        setdisplay(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-fluid" style={{ padding: "15px" }}>
      <button className="btn btn-default" onClick={back}>
        BACK
      </button>
      <div>
        <div className="row">
          {display &&
            Tweets.map((tweet) => {
              return (
                <Card
                  dataa={{
                    createdAt: tweet.createdAt,
                    text: tweet.text,
                    name: tweet.name,
                    username: tweet.username,
                    retweet_count: tweet.retweet_count,
                    favourites_count: tweet.favourites_count,
                    image_link: tweet.image_link,
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OutputPage1;
