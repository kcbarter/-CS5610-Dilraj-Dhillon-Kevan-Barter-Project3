## Available Scripts

In the project directory, you can run:

### `npm run devstart`

Runs the React App and the Node server

### `nodemon server`

Runs api server. \
Port: 8000

### `ctrl + shift + esc -> services -> mongod -> start`

Runs database server. \
Port: 27017

### `mongod --dbpath <non-default-path>`

Runs database server on user created path. \
Port: 27017

## Setup

### Mongo Atlas

Don't forget to set MONGODB_URI env variable if connecting to remote database

### Installations

`npm install`
`npm install -g nodemon concurrently`