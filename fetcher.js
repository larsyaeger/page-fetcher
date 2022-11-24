const request = require('request');
const fs = require('fs');
const http = require('http');
const https = require('https');
const userInput = process.argv.slice(2);
const userUrl = userInput[0];
const userFilePath = userInput[1];
request(userUrl, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body);
     fs.writeFile(userFilePath, body, function(err) {
      if (err) {
        return console.log(err);
      }
     console.log('the file was saved size is ' + body.length + 'bytes');
    })
});
















// https.get(userUrl, resp => {
//   let data = '',

//   resp.on('data', chunk => {
//     data += chunk;
//   });

//   resp.on('end', () => {
//     let url = JSON.parse(data);
//     console.log(url);
//     // fs.writeFile(userFilePath, url, function(err) {
//     //   if (err) {
//     //     return console.log(err);
//     //   }
//     //   console.log('the file was saved');
//     // })
//   })
// })