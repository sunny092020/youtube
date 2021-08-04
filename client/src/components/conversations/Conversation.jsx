import "./conversation.css"
import { useContext, useState, useEffect } from "react"
import axios from "axios";

export default function Conversation({conversation, currentUser}) {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        console.log("friendId: " + friendId);
        const getUser = async ()=>{
            try {
                const res = await axios("/users?userId=" + friendId);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            <img 
                src="https://photo-cms-plo.zadn.vn/w800/Uploaded/2021/bivxpcwk/2019_10_10/soc-2_cmgy.jpg"
                alt="" 
                className="conversationImg" 
            />
            <span className="conversationName">aaa</span>
        </div>
    )
}
