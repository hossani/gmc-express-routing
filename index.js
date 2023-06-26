const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// if Monday to Friday,  from 9 to 17 ? use this code  

// Create a custom middleware to verify the time of the request
// const timeMiddleware = (req, res, next) => {
//   const date = new Date();
//   const day = date.getDay();
//   const hour = date.getHours();
  
//   if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
//     next();
//   } else {
//     res.status(404).send('Sorry, we are closed !');
//   }
// };
// Create a custom middleware to verify the time of the request


// ----- if not in this dates : Monday to Friday,  from 9 to 17 ? use this code  ---- 

const timeMiddleware = (req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    
    // Allow requests outside of working hours for testing purposes
    if (true || (day >= 1 && day <= 5 && hour >= 9 && hour < 17)) {
      next();
    } else {
      res.status(404).send('Sorry, we are closed!');
    }
  };
  
//   ---------------------------

// Use the middleware for all routes
app.use(timeMiddleware);

// Define the routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
