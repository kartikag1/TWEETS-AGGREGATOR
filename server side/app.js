const express = require("express");
const Twitter = require("twitter");
const cors = require("cors");
const _ = require("lodash");

const client = new Twitter({
<<KEYS>>
});

const app = express();
app.use(cors());
let results = [];
app.get("/tag/:query", async (req, res) => {
  await client.get(
    "search/tweets",
    {
      q: req.params.query,
    },
    function (error, tweets, response) {
      if (!error) {
        tweets.statuses.forEach((tweet) => {
          results.push({
            createdAt: tweet.created_at,
            text: tweet.text,
            name: tweet.user.name,
            username: tweet.user.screen_name,
            retweet_count: tweet.retweet_count,
            favourites_count: tweet.user.favourites_count,
            image_link: tweet.user.profile_image_url,
            image_link_https: tweet.user.profile_image_url_https,
          });
        });
        res.json(results);
      }
    }
  );
});

app.get("/profile/:profile", (req, res) => {
  let uri = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=50";
  client.get(
    uri,
    { screen_name: req.params.profile },
    (error, tweets, response) => {
      if (!error && tweets) {
        try {
          tweets.forEach((tweet) => {
            results.push({
              createdAt: tweet.created_at,
              text: tweet.text,
              name: tweet.user.name,
              username: tweet.user.screen_name,
              retweet_count: tweet.retweet_count,
              favourites_count: tweet.user.favourites_count,
              image_link: tweet.user.profile_image_url,
              image_link_https: tweet.user.profile_image_url_https,
            });
          });
        } catch (err) {
          console.log(err);
        }
        _.uniqWith(results, _.isEqual);
        return res.json(results);
      }
    }
  );
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log("app up and running"));
