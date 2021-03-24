exports.go = (server) => {
  var Primus = require('primus');
  let primus = new Primus(server, {});


  primus.on("connection", (spark) => {
    console.log("⚡️️️️");

   /* spark.on("data", (data) => {
      console.log(`received ${data.emotion}`);


    });*/

  });



}

