const http = require('http');
// http must be used at the beginning of everything

const hostname = "localhost";
// this is the hostname
const port = 2000;
// tis is the server ID

// this is to check if i set up the host and server correctly


const jsonBody = require("body/json");
// ****
var scores = [{ name: "Edwin", score: 50 }, { name: "David", score: 39 }];
// these are the scores I want to display on my page
var pushScores = [{ "name": "Chok", "score": 42 }];
// this is the score I would like to add to all of that


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // this is me naming the server
  
    // this is required to add any "POST" into my server data

    if (req.method === "GET") {
      // if using GET in rest client
      if (req.url === "/scores") {
        // if you specifically add "/scores" to the address bar
        res.statusCode = 200;
        // then, show statuss 200 which is a string of scores

        res.end(JSON.stringify(scores));
        // show the scores in a string using var scores
      } else {
        // for any other requests
        res.statusCode = 404;
        // use status code 404 (eror)
        res.setHeader('Content-Type', 'text/plain');
        // 
        body = "Error: invalid URL";
        // display message above
      }
    } else if (req.method === "POST") {

      jsonBody(req, res, function (err, body) {
      //  if i do a post request
      if (req.url === "/scores") {
        // if i use a post request adding /scores to the url
        res.statusCode = 201;
        // use status code 201
        scores.push(body);
        scores.sort((a,b) => (b.score - a.score));
        // displays highest scores
        scores.splice(3);
      //  showing only 3 scores
        res.end(JSON.stringify(body));
        // show results in a string
      } else {
        // for any other requests
        res.statusCode = 404;
        // use status code 404 (eror)
        res.setHeader('Content-Type', 'text/plain');
        // 
        body = "Error: invalid URL";
        // display message above
      }
    })
}
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // the link to the server
});