const express = require('express') ;
const bodyParser = require('body-parser'); //  to parse request body
const {Connection} = require('./database/db.js');//object destructuring
const router = require('./routes/route.js')
const cors = require('cors')   // to interact with web pages in one domain to the resources from another domain
const app = express();
const PORT = 8000;

app.use(cors()); // Enable CORS for all routes
// Middleware to parse JSON request body
app.use(bodyParser.json());

app.use('/',router)  //setting up a middleware in Express.js application. This middleware is telling the application to use the routes defined in the router object for any request that matches the specified path, in this case, the root path '/'.  It specifies that any request with a path matching '/' should be handled by the routes defined in the router object. The routes in the router object will handle the incoming requests and execute the corresponding logic.


// Route to add a new user
// app.get('/home-page',(req,res)=>{
//     res.send("Home Page")
// })


Connection()

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
