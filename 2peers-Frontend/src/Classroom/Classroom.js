import MakeMessage from "./MakeMessage";
import Message from "./Message";

export default function Classroom(props){
    return (
        <div className="classroom">
            <div className="msg-container">
                {/* map when connected to backend */}
                <Message/>
            </div>
            <div className="compose-msg">
                <MakeMessage/>
            </div>
        </div>
    )
}