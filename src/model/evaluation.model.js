const mongoose=require("mongoose")

const evaluationSchema = new mongoose.Schema(
    {
      instructur: { type: String, required: true },
      topicName: { type: String, required: true },
      sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true,
      },
      authorId: 
        // { type: mongoose.Schema }
        { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Evaluation = mongoose.model("evaluation", evaluationSchema);
  module.exports=Evaluation;