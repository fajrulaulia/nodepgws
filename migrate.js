const { migrate } = require("postgres-migrations")
const pg = require("pg")

const dbConfig = {
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
}

console.log("Migrating to database", process.env.PG_DATABASE)

const client = new pg.Client(dbConfig)
client.connect()
migrate({ client }, "./migrations").then((res) => {
  console.log(res)
  process.exit(0)

}).catch(err => {
  console.log("Error Migrate:", err)
  process.exit(1)

})
