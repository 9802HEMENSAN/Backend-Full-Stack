const express=require("express")
const {EmployeesModel}=require("../Model/employee.model")
const PatchBlogsRouter =express.Router()

 
PatchBlogsRouter.patch("/:id" , async(req,res)=>{
    try {
      const{id}=req.params
      const blog=await EmployeesModel.findOne({_id:id})
   if(!blog){
      res.json({msg:"Blog not found"})
   }
   else{
      await EmployeesModel.findByIdAndUpdate(id,req.body)
      res.json({msg:"Blog Updated"})
   }
  } catch (error) {
      res.json({msg:error})
  }
})

module.exports={
    PatchBlogsRouter
}
