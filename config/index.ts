import * as sequelize from 'sequelize';

export default class Tables {
    createConnection() {
        let db = new sequelize('YTBDEVDB02', 'ytbadmin', 'Yt6@dm1n1234', {
            host: 'ytbproddbsvr01.database.windows.net',
            dialect: 'mssql',
            dialectOptions: {
                    encrypt: true
            }
        });
        return db;
    }
}