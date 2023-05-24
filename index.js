//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const employee = require('./routes/employee');
const user = require('./routes/user');
//Middleware
const index = require('./middleware/index');
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', index);
app.use('/user', user);
app.use(auth);
app.use('/employee', employee);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});