const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
// const cors = require('cors');

const PORT = process.env.PORT || '8000';
// HEALTH CHECK
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/health', (req, res) => res.status(200).json("Health Check Passed"));

// LOGGER
app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));

// MIDDLEWARE
// app.use(cors({credentials: true}));
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => { console.log(req.body); next(); });

app.get('/v1/check', (req, res) => {
    res.status(200).json("Yay! It's working");
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    console.error(err);
    res.status(err.status || 500).send(res.locals.message);
  });




app.listen(PORT, (err) => {
  console.log(new Date(), err || 'server listening on port '  + PORT);
});

module.exports = app;