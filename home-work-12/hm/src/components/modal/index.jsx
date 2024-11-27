import "./../style/modal.css"
export default function Modal({addDo}){
    return(
        <div className="modal-container">
            <p className="modal-title">Add New To Do</p>
            <input type="text" className="modal-input" placeholder="Your text"/>
            <button className="modal-button-add" onClick = {()=>addDo(document.getElementsByClassName("modal-input")[0].value)}>Add</button>
        </div>
    );
}