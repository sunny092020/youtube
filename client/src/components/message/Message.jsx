import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://photo-cms-plo.zadn.vn/w800/Uploaded/2021/bivxpcwk/2019_10_10/soc-2_cmgy.jpg"
                    alt=""
                />

                <p className="messageText">Hello, this is a message</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>

        </div>
    )
}
