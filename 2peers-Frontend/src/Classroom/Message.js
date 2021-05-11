export default function Message(props){
    //const {name, email, message} = props;

    return (
        <div className="message">
            <div className="rating">
                ★★★★☆
            </div>
            <div className="message-content">
                <div className="message-composer">
                    Name
                </div>
                <div className="message-txt">
                    Message text
                </div>
            </div>
        </div>
    )
}