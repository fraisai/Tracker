const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const authRoutes = require('./controllers/authorization/auth_routes');
const cartsRoutes = require('./controllers/carts/carts_routes');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(logger('dev'));
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true });
});

app.get('/check', (req, res) => {
  res.status(200).json({ message: "Yay! It's working" });
});

app.use('/auth', authRoutes);
app.use('/api', cartsRoutes);

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

module.exports = app;