const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
      type: String, required: true,
      trim: true, unique: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    firstName: {type: String},
    lastName: {type: String},
    profilePicture:{type:String,required:true}
  });
  
 module.exports=User= mongoose.model('User', UserSchema); //defining model
