import server from './src/server.js';

server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`)
})