const server = require('./server');

const PORT = process.env.PORT || 4000;

server.get('/', (req, res) => {
  res.send('<h1>Welcome to the Server!</h1>')
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); 