const Primus = require('primus');

function go(server){
  let primus = new Primus(server, {/* options */});
  

}

module.exports.go = go;

