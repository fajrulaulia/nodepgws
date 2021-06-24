# nodepgws
Node JS API using express and Postgresql

## Specification
This Framework uses NodeJS with javascript as the programming language, this is very easy to use in development needs, this project uses a postgreSQL database server in managing the database needed and for deployment needs using Docker, this project is supported by Migration which is integrated in local development and production.

## Features
  - Route 
  - Migration
  - Storage
  - Auth Standard
  - Docker Image Build and Run
  - PostgreSQL Driver

## Development Mode
for development mode, you just need to clone this project and edit Database server Configuration and set it up.
- setup Enviroment Variable in  Makefile
  ``` bash 
  make local-migrate
  ```
- Run it 
  ``` bash 
  make local-run
  ```
  
## Production Mode
- Build Image and deploy it to registry
  ``` bash 
  make image-build
  ```
- to testing image in local, you can run
  ``` bash
  make image-run
  ```
