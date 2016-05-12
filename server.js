var server = require('pushstate-server');

server.start({
  port: 5000,
  directories: [
    './'
  ]
}).listen(process.env.PORT || 5000);
