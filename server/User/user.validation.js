
const {body}=require('express-validator')

exports.userDataValidation = [

    body("name")
        .exists({ checkFalsy: true })
        .withMessage("User name is required")
        .isLength({ min: 4, max: 30 }).withMessage("name is too short")
        .isString()
        .withMessage("User name should be string")
]