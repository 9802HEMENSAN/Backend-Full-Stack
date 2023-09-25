const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar : { type: String  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports={
    UserModel
}

// {
//   "msg": "login successfuly",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTExN2Y3YjRjNDNiYjY3ZjNkMjdjMTYiLCJ1c2VybmFtZSI6InIiLCJpYXQiOjE2OTU2NDcwMDF9.zkAP_-V9YWPBkM2_eooTY8coAldA-wGTww6QNvtOuu8"
// }
