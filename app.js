const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/uses');
const contactsRouter = require('./routes/contacts');
const verifyUser = require('./middlewares/verifyUser');
const app = express();
// let user;
//middleware
//rutas ...
app.use(express.json()); // recibe json y enviar json y convierte a javascript
app.use(morgan('tiny')); //son las llamadas error 404
app.use(express.urlencoded({ extended: true })); //verifica que contenido se envia el frontend

//rutas backend
app.get('/', async (request, response) => {
  return response.status(200).json({ hola: 'mundo' });
});
// app.get('/user', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });
app.use('/api/users', usersRouter);
app.use('/api/contacts/', verifyUser, contactsRouter);
// app.use('/api/contacts/:id', contactsRouter);

//app.delete('/api/contacts/:id', (req, res) => {
//  res.send('DELETE request to homepage');
//});
module.exports = app; //para exportar la aplicacion y utilizar en cualquier parte de la aplicacion
