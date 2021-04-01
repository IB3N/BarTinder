'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./router');
const sequelize = require('./models');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`🤟 Server running at http://localhost:${PORT} 👊`);
    });
    try {
      await sequelize.authenticate();
      await sequelize.sync(); // { force: true } use this to drop all data from table
      console.log('🤙 Database connection successful 👌');
    } catch (error) {
      console.error(`👎 Could not connect to database: ${error} 🖕`);
    }
  } catch (error) {
    console.error(error);
  }
})();
