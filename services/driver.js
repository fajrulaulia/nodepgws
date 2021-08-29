const { Client } = require('pg')

module.exports = {
  DriverDb: () => {
    const client = new Client({
      connectionLimit: 10,
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT

    });
    client.connect()
    return client
  },
}


