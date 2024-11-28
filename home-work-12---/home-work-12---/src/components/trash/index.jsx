import TRASH from "./../../assets/trash.png";
import DO from "./../../assets/move-back-to-do.png";
import "./../style/trash.css";
export default function Trash(props){
    return(
        <div className="trash-container">
            {props.status != "trash" && 
            (<div className="trash-row" onClick={()=>props.changeDos(props.id,"trash")}>
                <img src={TRASH} alt="" className="trash-icon"/>
                <p className="trash-text">Move to trash</p>
            </div>
            )}
            {props.status == "trash" && (
                <div className="trash-row" onClick = {()=>props.deleteDo(props.id)}>
                    <img src={TRASH} alt="" className="trash-icon"/>
                    <p className="trash-text">Delete forever</p>
                </div>
            )}
            {props.status != "active" && (
                <div className="trash-row" onClick={()=>props.changeDos(props.id,"active")}>
                    <img src={DO} alt="" className="trash-icon"/>
                    <p className="trash-text">Move Back To To Do</p>
                </div>
            )}
        </div>
    );
}