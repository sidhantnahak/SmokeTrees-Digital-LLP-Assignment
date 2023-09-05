const express = require('express');
const { userDataValidation } = require('./user.validation');
const { validationResult } = require('express-validator')
const router = express.Router();
const User = require('./UserSchema');


router.post('/api/v1/register', userDataValidation, async (req, res) => {

    try {
        const { name, address } = req.body;

        if (!name || !address) {
            return res.status(401).json({ message: "enter required fields", sucess: false })
        }
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg, sucess: false })

        }

        const user = await User.create({
            name,
            address

        })
        return res.status(200).json({ user: user, sucess: true });

    } catch (error) {
        return res.status(500).json({ error: error.message, sucess: true });

    }
})