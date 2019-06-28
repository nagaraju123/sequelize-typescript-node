import * as express from 'express';
import {Application,Request,Response,NextFunction} from 'express';

import app from './app';


const appl:Application=express();

appl.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send("Default route of Hello")
});

appl.use('/app',app);

appl.listen(3000,()=>console.log("server liste on port 3000") );