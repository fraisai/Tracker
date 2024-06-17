const express = require('express');
const fs = require('fs');
const path = require('path');
// const ReactDOMServer = require('react-dom/server');
const React = require('react')
import App from "../src/client/App.jsx";

const { renderToString } = require('react-dom/server');
const StoreFront = require('../src/client/containers/StoreFront.cjs').default;
const ProductPageContainer = require('../src/client/containers/ProductPageContainer.cjs').default;

const logger = require('morgan');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8001;

// HEALTH CHECK
app.get('/health', (req, res) => res.status(200).json("Health Check Passed"));
app.get('/check', (req, res) => res.status(200).json("Yay! It's working"));

// LOGGER
app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));

// MIDDLEWARE
app.use(cors({ credentials: true }));
app.use(express.json()); // express's built in body-parser - parse JSON bodies, this gives ability to "read" incoming req.body/JSON object
app.use(express.urlencoded({ extended: true }));

app.use('/products/the-unicorn', (req, res) => {
  console.log(renderToString(StoreFront))
  const indexFile = path.resolve(__dirname, '../dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    return data.replace('<div id="root"></div>', `<div id="root">${ProductPageContainer}</div>`)
  })
  res.sendFile(indexFile);
})
// app.get('/products/the-unicorn', (req, res) => {
//   console.log(productUnicorn)

//   const indexFile = path.resolve(__dirname, '../dist/index.html');
//   console.log('index:', indexFile)

//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.log('products/unicorn', err);
//       return res.status(500).send('Error');
//     }
//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${productUnicorn}</div>`)
//     );
//   })
//   res.sendFile(indexFile);
//   return;
// });


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

app.use('/', express.static(path.join(__dirname, '../dist')));


app.listen(PORT, (err) => {
  console.log(new Date(), err || 'server listening on port '  + PORT);
});

module.exports = app;
