// Import the Express module and create an Express application 
const express = require('express');
const app = express();

// Set EJS as the view engine for our Express application
app.set('view engine', 'ejs');

const methodOverride = require('method-override');
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Connect all our routes to our application
const routes = require('./routes');
app.use('/', routes);

// Serve images, CSS files, and JavaScript files from a directory named 'public'
app.use(express.static(__dirname + '/public'));

// Import configuration for port and hostname
const config = require('./config.js');
const port = config.port;
const hostname = config.hostname;

// Start the Express server 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

