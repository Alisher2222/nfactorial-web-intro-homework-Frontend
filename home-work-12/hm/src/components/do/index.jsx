import "./../style/do.css";
import options from "./../../assets/do-options.png";
import Trash from "./../modalTrash";
export default function Do(props) {
    return (
        <div className="do">
            <img src={options} alt="" onClick = {()=>props.changeDoOptionStatus(props.id)} style={{cursor:"pointer", width:"5px"}}/>
            {props.doOptionStatus && props.id == props.changedID && <Trash 
                                                                            status = {props.status} 
                                                                            id = {props.id} 
                                                                            moveToTrash = {props.moveToTrash} 
                                                                            moveToActive = {props.moveToActive}
                                                                            deleteForever = {props.deleteForever}
                                                                            />}
            {console.log(props.id == props.changedID)}
            {(props.status === "done")? <input type="checkbox" checked/>: 
            (props.status === "active")?<input type="checkbox" onChange={props.changeChecked} id = {props.id}/>:
            <input type="checkbox"/>
            }
            {(props.status === "done")? <p style={{textDecoration:"line-through"}}>{props.content}</p>: <p>{props.content}</p>}
        </div>
    );
}
