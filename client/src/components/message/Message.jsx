import "./message.css"
import {format} from "timeago.js"

export default function Message({message, own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://photo-cms-plo.zadn.vn/w800/Uploaded/2021/bivxpcwk/2019_10_10/soc-2_cmgy.jpg"
                    alt=""
                />

                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>

        </div>
    )
}
