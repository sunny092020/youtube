import ChatOnline from "../../components/chatOnline/ChatOnline"
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import Topbar from "../../components/topbar/Topbar"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./messenger.css"
import axios from "axios"

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };

        getConversations();
    }, [user._id]);

    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        <Conversation/>
                        <Conversation/>
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <div className="chatOnlineWrapper">
                            <ChatOnline/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}