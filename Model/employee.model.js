const mongoose = require("mongoose");

const BlogsSchema = mongoose.Schema({
  userId: {
    type: String,
     
  },
  username: {
    type: String,
  
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category : {
    type: String,
    enum: ["Tech", "Marketing", "Operations"],
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  }
});

const  EmployeesModel = mongoose.model("employee", BlogsSchema);

module.exports = {
  EmployeesModel,
};
