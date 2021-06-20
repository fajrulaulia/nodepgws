export APP_PORT=8081

export PG_HOST=localhost
export PG_USER=golpgwsuser
export PG_PASSWORD=golpgwspass
export PG_DATABASE=golpgwsdb


local-run:
	npm start

local-migrate:
	node migrate