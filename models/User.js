import mongoose , { Schema } from "mongoose";


const UserSchema = new mongoose.Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
});

// const UserModel = mongoose.model('User', UserSchema);
export default mongoose.model('User', UserSchema);

// module.exports = UserModel;