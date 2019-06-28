import * as sequelize from 'sequelize';

export default class Tables {
    createConnection() {
        let db = new sequelize('dbname', 'username', 'pass', {
            host: 'host',
            dialect: 'mssql',
            dialectOptions: {
                    encrypt: true
            }
        });
        return db;
    }
}
