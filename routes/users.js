import express from 'express'

const router = express.Router()

const users = [
    {
        "firstName": "Farhin",
        "lastName": "Sara",
        "age": 21
    },
    {
        "firstName": "MJA",
        "lastName": "Shohan",
        "age": 21
    }
]

router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)
    res.send(`User with the name ${user.firstName} added to the database!`)
})

export default router