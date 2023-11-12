const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const statusRouter = require('./routes/status')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

const clientRouter = require('./routes/cliente'); // Código agregado
const turnoRouter = require('./routes/turno'); // Código agregado

const authentication = require('./middlewares/authentication')
const authorization = require('./middlewares/authorization')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(authorization)


// This is to aviod error
app.get('/favicon.ico', (req, res) => res.status(204))

app.use('/', statusRouter)
app.use('/auth', authRouter)
app.use('/users', authentication, userRouter)
app.use('/clients', /*authentication ,*/clientRouter); // Código agregado
app.use('/turno', /*authentication ,*/turnoRouter); // Código agregado


module.exports = app
/* s
 */
