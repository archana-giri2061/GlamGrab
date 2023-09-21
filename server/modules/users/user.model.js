const {Schema, model} = require('mongoose');
const commonSchema = require('../../utils/commonSchema');

const userSchema = new Schema({
    name:{type: String, required: "Full Name is required"}, 
    email:{
        type: String,
        trim: true,
        lowerCase: true,
        unique: true,
        required:"Email address is required",
        validate:[validateEmail, "please fill a valid email address"],
        match:[

        ]
    
    },
    password:{
        type: String, required: true,
    },
    ...commonSchema,
});

module.exports = model('User', userSchema);