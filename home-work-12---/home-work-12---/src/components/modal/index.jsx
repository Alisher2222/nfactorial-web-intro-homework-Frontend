import "./../style/modal.css";
export default function ModalAdd(props){
    return(
        <div className="modal-container">
            <p className="modal-title">Add New To Do</p>
            <input type="text" className="modal-input" placeholder="Your text" value = {props.addValue} onChange={props.changeAddValue}/>
            <button className="modal-button" onClick={props.submit}>Add</button>
        </div>
    );
}