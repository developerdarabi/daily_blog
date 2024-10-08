import mysql from 'mysql2/promise';
import getConfig from 'next/config';
import { Model, ModelDefined, Sequelize } from 'sequelize';
import blogModel from './model/blog';

const { serverRuntimeConfig } = getConfig();

interface DbProps {
    initialized: boolean
    initialize?: any,
    Blogs?: any
}

export const db: DbProps = {
    initialized: false,
    initialize,
};

// initialize db and models, called on first api request from /helpers/api/api-handler.js
async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = serverRuntimeConfig.dbConfig;

    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql', dialectModule: require('mysql2'), });

    // init models and add them to the exported db object
    db.Blogs = blogModel(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });

    db.initialized = true;
}

// sequelize models with schema definitions
