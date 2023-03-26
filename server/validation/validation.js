const Joi = require('joi')
// import Joi from "joi";

const UserRegisterValidation = (data) => {

    const schema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.ref("password"),
    })

    return schema.validate(data, { abortEarly: false });
}

const UserLoginValidation = (data) => {

    const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    })

    return schema.validate(data, { abortEarly: false });
}
 
module.exports = {
    UserRegisterValidation,
    UserLoginValidation
}
