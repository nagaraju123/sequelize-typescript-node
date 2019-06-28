import {Router} from 'express'
import * as dbTables from '../models/db.tables';
import sequelize = require('sequelize')
import ModelIndex from '../config/index';;
const table=new ModelIndex;
let tables = dbTables.getModels(table.createConnection());
let {Hotbeds_Hotels} = tables


const app = Router();

app.get('/user', async (req, res) => {
    try{
        
    res.send(await Hotbeds_Hotels.findAll({attributes:['Hotel_Sk'],limit:10,order:['Hotel_Sk']}));
        
    }
    catch(err){
        res.send(err);
    }

});

export default app