const express=require("express")
const router=express.Router();
const Student=require("../model/student.model")

router.post("", async (req, res) => {
    const tag = await Student.create(req.body);
    return res.status(200).json({ tag });
  });
  
  router.get("", async (req, res) => {
    const tags = await Student.find().populate("authorId").populate("sectionId").lean().exec();
    return res.status(200).json({ tags });
  });
  
  router.get("/:id", async (req, res) => {
    const tags = await Student.findById(req.params.id).populate("authorId").populate("sectionId").lean().exec();
    return res.status(200).json({ tags });
  });
  router.patch("/:id", async (req, res) => {
    const tags = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).json({ tags });
  });
  router.delete("/:id", async (req, res) => {
    const tags = await Student.findByIdAndDelete(req.params.id);
    return res.status(200).json({ tags });
  });
 

  module.exports=router;