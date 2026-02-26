const mongoose = require("mongoose")


// Edge-collection
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,                      
        // unique -> means ek user name ka sath sirf ek he user exist kaar sakta hai
        required:[true,"user name is required already"]
        // required -> means bina user name ka koi sa bhi user create nhi kaar sakte ho
    },
    email:{
        type: String,
        unique:[true,"email is already exits"],
        required:[true,"email is required"]
    },
    password:{
        type: String,
        required:[true,"password is already required"]
    },
    bio:String,

    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/nqy1atn7m/user%20profile.jpg"
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel 

