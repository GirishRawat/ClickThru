var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    //"Authorization": "Basic NmE4NTAxNjQtNGNhNi00YTRjLThkYTMtZDJlN2I2NTkyODcy"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications/205d2564-356c-4e92-8bfd-be8621baef96",
    method: "PUT",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "d1d024e5-303e-4cb8-b167-0721a5d767bb",
  opened: "true"
};

sendNotification(message);