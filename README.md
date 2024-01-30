# About
This is a ready to use ExpressJs server template with a Postgres database

## Create the DB
1. Start postgres with the command `startpostgres` or `sudo -i -u postgres` (make sure you have postgres installed in the device chosen to run this app)
2. Create a database: from your terminal run the command `psql` then `CREATE DATABASE template_db;`. If you want to use a deferent name for your database go to the file .env and change the database to whatever you like. Also in the .env file you can change the postgreSQL password to match what your postgreSQL is currently, as well as the postgreSQL user name.

## Setup
1. Install server dependencies using the `npm install` command.
3. run the command `npm run db:reset` to create the tables and insert data into the database. This command is also used to reset the database back to it's original state.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>. To run this app using nodemon use the command: `npm run local`

## Routes
- The home route <http://localhost:8000/> will display a text on the browser with the tittle of this template app

!["Screenshot of main page"](./docs/home-route.PNG)

- The debug route <http://localhost:8000/debug> will display a list of all emails saved in the database

!["Screenshot of main page"](./docs/debug-route.PNG)
