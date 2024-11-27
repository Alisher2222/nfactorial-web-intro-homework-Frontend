import Trash from "./../../assets/trash.png";
import "./../style/modalTrash.css";

export default function ModalTrash({ moveToTrash, id, status, moveToActive, deleteForever }) {
    return (
        <div>
            {status === "active" ? (
                <div className="trash-container" >
                    <div className="trash-container-row" onClick={() => moveToTrash(id)}>
                        <img src={Trash} alt="trash icon" className="trash-icon" />
                        <p className="trash-text">Move to Trash</p>
                    </div>
                </div>
            ) :  status === "trash" ?(
                <div className="trash-container">
                    <div className="trash-container-row" onClick = {()=>deleteForever(id)}>
                        <img src={Trash} alt="trash icon" className="trash-icon" />
                        <p className="trash-text">Delete Forever</p>
                    </div>
                    <div className="trash-container-row" onClick = {()=>moveToActive(id)}>
                        <img src={Trash} alt="trash icon" className="trash-icon" />
                        <p className="trash-text">Move Back To To Do</p>
                    </div>
                </div>
            ):(
                <div className="trash-container" >
                    <div className="trash-container-row" onClick={() => moveToTrash(id)}>
                        <img src={Trash} alt="trash icon" className="trash-icon" />
                        <p className="trash-text">Move to Trash</p>
                    </div>
                    <div className="trash-container-row" onClick = {()=>moveToActive(id)}>
                        <img src={Trash} alt="trash icon" className="trash-icon" />
                        <p className="trash-text">Move Back To To Do</p>
                    </div>
                 </div>   
                )}
        </div>
    );
}
