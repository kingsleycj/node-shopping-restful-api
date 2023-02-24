const express = require('express');
const app = express(); 
const morgan = require('morgan');

const productRoutes = require('./src/routes/products');
const orderRoutes = require("./src/routes/orders");


app.use(morgan('dev'))
// Routes that should handle requests
app.use('/products', productRoutes);
app.use("/orders", orderRoutes);

app.use( (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500); 
    res.json({
        error: {
            message: error.message 
        }
    });
});
module.exports = app;