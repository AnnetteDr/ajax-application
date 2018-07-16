const dotenv = require('dotenv');
dotenv.config();

const hostname = (process.argv[2]) ? process.argv[2]
  : (process.env.NODE_HOSTNAME) ? process.env.NODE_HOSTNAME : 'localhost';

const port = (process.argv[3]) ? process.argv[3]
  : (process.env.NODE_PORT) ? process.env.NODE_PORT : 8000;

exports.port = port;
exports.hostname = hostname;
