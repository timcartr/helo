require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const masssive = require('massive')
const session = require('express-session')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const app = express()
app.use(bodyParser.json())

app.use(session({
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))


// Endpoints
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)
// app.get('/api/posts/:id', ctrl.getAllSearchedPosts)
// app.get('/api/posts/:id', ctrl.getAllPostsNotUser)
// app.get('/api/posts/:id', ctrl.getSearchPostsNotUser)
// app.get('/api/posts/:id', ctrl.getAllPosts)
app.get('/api/posts/:id', ctrl.conditionalPosts)
app.post('/api/auth/logout', ctrl.logout)
app.get('/api/auth/me', ctrl.auth)

masssive(CONNECTION_STRING).then( connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Gentle Giraffes eating leaves on port ${SERVER_PORT}`)
    })
})