const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const mathFunctions = require('./mathFunctions')

app.use(express.json());

app.get('/mean', (req, res, next) => {
    const numbers = req.query.numbers;
    if (!numbers) {
      return next(new ExpressError("Numbers query parameter is required.", 400));
    }
    
    const numbersArray = numbers.split(',').map(Number);

    const mean = mathFunctions.findMean(numbersArray);
    res.json({ mean });
  });

app.get("/median", (req, res, next) => {
    const numbers = req.query.numbers;
  if (!numbers) {
    return next(new ExpressError("Numbers query parameter is required.", 400));
  }
  
  const numbersArray = numbers.split(',').map(Number);
  const median = mathFunctions.findMedian(numbersArray);
  res.json({ median });
});

app.get("/mode", (req, res, next) => {
    const numbers = req.query.numbers;
  if (!numbers) {
    return next(new ExpressError("Numbers query parameter is required.", 400));
  }
  const numbersArray = numbers.split(',').map(Number);
  const mode = mathFunctions.findMode(numbersArray);
  res.json({ mode });
});

app.get("/all", (req, res, next) => {
    const numbers = req.query.numbers;
    if (!numbers) {
      return next(new ExpressError("Numbers query parameter is required.", 400));
    }
    const numbersArray = numbers.split(',').map(Number);
    const mean = mathFunctions.findMean(numbersArray);
    const median = mathFunctions.findMedian(numbersArray);
    const mode = mathFunctions.findMode(numbersArray);
    
    res.json({ mean, median, mode });
  });

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: err.message || "Internal Server Error"
    });
  });
  

app.listen(3000, function () {
    console.log('App on port 3000');
  })