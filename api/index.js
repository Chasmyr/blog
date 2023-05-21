const dotenv = require('dotenv')
dotenv.config({path: './.env'})

const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
const salt = bcrypt.genSaltSync(10)
const secretTokenKey = process.env.SECRET_TOKEN_KEY

app.use(cors({credentials:true, origin:process.env.APP_URL}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.DATABASE_CONNECTION)

app.post('/register', async (req, res) => {
    const {username, password} = req.body
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    } catch (e) {
        res.status(400).json(e)
    }
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    try {
        const userDoc = await User.findOne({username})
        const passwordCheck = bcrypt.compareSync(password, userDoc.password)
        if(passwordCheck) {
            // logged in
            // create token
            jwt.sign({username, id: userDoc._id}, secretTokenKey, {}, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json('login successful')
            })
        } else {
            // not logged
            res.status(400).json('wrong credentials')
        }
    } catch (e) {
        res.status(400).json(e)
    }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies
    jwt.verify(token, secretTokenKey, {}, (err, info) => {
        if (err) throw err
        res.json(info)
    })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})

const port = process.env.API_PORT || 4000
app.listen(port)