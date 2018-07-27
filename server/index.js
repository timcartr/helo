require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const masssive = require('massive')

const app = express()
app.use(bodyParser.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

// Endpoints
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)
app.get('/api/posts/:id/?:userposts&:search', ctrl.getAllUserPosts)

masssive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Gentle Giraffes eating leaves on port ${SERVER_PORT}`)
    })
})