const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Log requests
app.use(morgan('tiny'));
// Parse requests with body-parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Load assets
app.use(express.static(path.join(__dirname, 'assets')));
// Routing
app.use("/",require("./server/routes/index"));
app.use("/admin",require("./server/routes/admin"))
// env config
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
