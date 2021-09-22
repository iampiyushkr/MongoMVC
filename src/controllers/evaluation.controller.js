const express=require("express")
const router=express.Router()
const Evaluation=require("../model/evaluation.model")


router.post("", async (req, res) => {
    const post = await Evaluation.create(req.body);
    return res.status(201).json({ post });
  });
  router.get("", async (req, res) => {
    const post = await Evaluation.find()
  
      .lean()
      .exec();
    return res.status(200).json({ post });
  });
  router.get("/:id", async (req, res) => {
       const author = await Evaluation.findById(req.params._id).lean().exec()
      
    return res.status(200).json({ author });
  });
  router.patch("/:id", async (req, res) => {
    const post = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ post });
  });
  router.delete("/:id", async (req, res) => {
    const post = await Evaluation.findByIdAndDelete(req.params.id);
    return res.status(200).json({ post });
  });

  module.exports=router