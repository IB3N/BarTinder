<h1>
BarTinder
<img src="./client/assets/tumblerSmall1.png" align="center" width="35" height="35">
</h1>

Curate a personalised list of cocktails and see matches with friends.

Made for bartenders and drinkers alike!

BarTinder lets drinkers decide what they want to drink before getting to the bar and helps bartenders know what to make for their illustrious cocktail parties they'll be throwing! 🍸 🥃

<p align="center">
  <img src="./client/assets/BarTinder1.gif"/>
</p>

## Getting started

Get yourself setup with your favourite code editor, a local Postgres DB running on your machine (need to know all of the credentials), expo for your phone and setup an account with The Cocktail DB or use the free version of their API

1. Clone the repo

```
git clone https://github.com/IB3N/BarTinder.git
cd BarTinder
```

2. Create your .env files

```
cd client
touch .env
```

```
/*
client/.env
You will need to use the free or paid version of the Cocktail DB (example is using free version)
*/

API_URL=https://www.thecocktaildb.com/api/json/v1/1/
API_KEY= (if you're paying for the API)
SERVER_URL=http://<localhost || IP_ADDRESS>:4000
```

```
cd ..
cd server
touch .env
```

```
/*
server/.env
Fill in your DB credentials
*/

DB_CONNECTION_URL=postgresql://[user[:password]@][netloc][:port][/dbname]
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
DB_DIALECT=postgres
DB_PORT=
```

3. Install dependencies and start BarTinder (you should already be in /server)

```
npm i
nodemon OR npm start
cd ..
cd client
npm i
expo start
```

## Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com)
- [Sequelize](https://sequelize.org/)
- [The Cocktail DB](https://www.thecocktaildb.com/api.php)

## Currently developing...

- Redux on the front end (checkout redux branch)
- Refactoring the back end to cleaner and more readable code
- More effectivley utilising sequelizes capabilities

## Room For Improvement

- Swipe on other drinks categories such as non-alcoholic, beer, punch etc...
- The ability to add friends
- Add an events page for parties
- Authorization and/or facebook/google login
