export APP_NAME=nodepgws
export APP_PORT=8081

export PG_HOST=localhost
export PG_USER=psql_user
export PG_PASSWORD=psql_pass
export PG_DATABASE=psql_db
export PG_PORT=7654


local-run:
	npm start

local-migrate:
	node migrate

image-build:
	docker build -f ./deployments/Dockerfile -t ${APP_NAME} .

image-run:
	docker run \
	--env APP_NAME=${APP_NAME} \
	--env APP_PORT=${APP_PORT} \
	--env PG_HOST=${PG_HOST} \
	--env PG_USER=${PG_USER} \
	--env PG_PASSWORD=${PG_PASSWORD} \
	--env PG_DATABASE=${PG_DATABASE} \
	--env PG_PORT=${PG_PORT} \
	--net=host ${APP_NAME} .