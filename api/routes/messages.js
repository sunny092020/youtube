const router = require("express").Router();
const Message = require("../models/Message");

module.exports = router;

// add

/*
{
    "conversationId":"<ID>",
    "sender":"605b3dc77a3cf74918165c06",
    "text":"hey john, im jane"
}
 */
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);
  try{
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  }catch(err){
      res.status(500).json(err)
  }
});

// get
router.get("/", async (req, res) => {
  try{
    const messages = await Message.find({
      conversationId: req.params.conversationId
    });
    res.status(200).json(messages)
  }catch(err){
      res.status(500).json(err)
  }
});

module.exports = router;
