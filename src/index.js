const express = require('express')
const cors = require('cors')
const connectDatabase = require('./config/database')
const branchRouter = require('./router/branch.router')
const adminRouter = require('./router/admin.router')

const app = express()

// settings
app.use(cors())
app.use(express.json())


// connect database
connectDatabase()

// routes ( API )

app.post('/register', (req, res) => {
    const { role, id, password, name, surname, age, phone, gender } = req.body

    if (!role || !id || !password) {
        return res.status(400).json({ error: 'Missing required fields' })
    }
    // check if user already exists
    const checkUser = database.find(user => user.id === id) // true / false

    if (checkUser) {
        // bor bo'lsa
        return res.status(400).json({ error: 'User already exists' })
    }

    database.push({
        role, id, password, name, surname, age, phone, gender, coin: 0, balance: 0, created_at: new Date().toLocaleString(), group: null, attendence: []
    })

    return res.status(200).json({ message: 'User created successfully' })
})

app.post('/login', (req, res) => {
    const { id, password } = req.body

    if (!id || !password) {
        return res.status(400).json({ error: 'Missing required fields' })
    }

    const checkUser = database.find(user => user.id === id && user.password === password)

    if (!checkUser) {
        return res.status(400).json({ error: 'User not found' })
    }

    return res.status(200).json({ message: 'User logged in successfully' })
})


app.use("/api/v1/branch", branchRouter)
app.use('/api/v1/admin', adminRouter)

app.listen('3000', () => {
    console.log('Server is running on port 3000')
})
