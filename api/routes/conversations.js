const router = require("express").Router();
const Conversation = require("../models/Conversation");

// new conversation
/*
    for testing
    {
        "senderId":"605b3dc77a3cf74918165c06",
        "receiverId":"605b3dc777a3cf74918165c05"
    }
*/
router.post("/", async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });

    try{
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    }catch(err){
        res.status(500).json(err)
    }
});

// get conversation of a user
router.get("/:userId", async (req, res) => {
    try{
        const conversation = await Conversation.find({
            members: {$in:[req.params.userId]}
        });
        res.status(200).json(conversation)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;
