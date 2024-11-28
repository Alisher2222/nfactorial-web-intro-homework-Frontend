import Options from "./../../assets/do-options.png";
import './../style/do.css';
import Trash from "./../trash";
export default function Do(props){
    return(
        <div className="option">
            <div style={{width:"20px",height:"20px",display:"flex",justifyContent:"center",alignItems:"center", cursor:"pointer"}}
            onClick={()=>props.showProperties(props.id)}>
                <img src={Options} alt="option-img" />
            </div>
            {(props.status === "done")?<input type="checkbox" checked/>:
            <input type="checkbox" onChange={()=>props.changeDos(props.id,'done')}/>}
            <p className={(props.status === "done")?"option-text-done":"option-text"}>{props.content}</p>
            {(props.trashID == props.id) && props.trashStatus && <Trash id = {props.id }
            status = {props.status} 
            changeDos = {props.changeDos}
            deleteDo = {props.deleteDo}
            />}
        </div>
    );
}