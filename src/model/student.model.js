const mongoose=require("mongoose")
const studentSchema = new mongoose.Schema(
    {
      roll_id: { type: String, required: true },
      currentBatch: { type: String, required: true },
      evaluationId:{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
     
      }
      
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Student = mongoose.model("student", studentSchema);
  module.exports=Student;