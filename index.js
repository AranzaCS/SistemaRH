//Dependencies
const express = require('express');
const app = express();
//Routers
//Middleware

app.get('/', index);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});