//This file handles the server
import express from 'express'
//These two lines ("import devbundle from './devBundle'" and devBundle.compile(app)) are ONLY for dev mode, and should be commented out when building the app code for production. 
import devBundle from './devBundle'
const app = express()
devBundle.compile(app)
//In dev mode, when lines 4 and 6 (import devBundle and devBundle.compile(app)) are executed, webpack will compile and bundle the React code to place it in dist/bundle.js

import path from 'path'
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//Below renders our template file when at the root dir
import template from './../template'
app.get('/', (req, res) => {
    //watch out for the () at the end of template()
    res.status(200).send(template())
})

//Connect MongoDB
import { MongoClient } from 'mongodb'
const url = process.env.MONGODB_URI || 'ENTER URI HERE'
MongoClient.connect(url, (err, db) => {
    if (err) console.log(err)
    console.log("Connected successfully to mongodb server")
    db.close()
})


//Config Express to start a server that listens on the specified port for incoming requests (END)
let port = process.env.PORT || 3000
app.listen(port, (err) => {
    if(err) console.log(err)
    console.info(`Server satrted on port ${port}`)
})