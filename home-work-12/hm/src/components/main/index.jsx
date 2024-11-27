import "./../style/main.css";
import ADD from "./../../assets/add.png";
import React, {useState} from 'react';
import Do from './../do';
import Modal from "./../modal";
export default function Main(){
    const [dos, setDos] = useState([
        {id: 0, content:"Write Essay", status:"active"},
        {id: 1, content:"math home work", status:"done"},
        {id: 2, content:"physcis home work", status:"trash"},
    ]);
    const [statusOfDos, setStatus] = useState("active"); 
    const [modalStatus, setModalStatus] = useState(false);
    const [doOptionStatus, setDoOptionStatus] = useState(false);
    const [ID, setID] = useState(-1);


    function changeStatus(status){
        if(doOptionStatus) setDoOptionStatus(false);
        setStatus(status);
    };
    function changeChecked(e){
        if(e.target.checked){
            let newDo = dos.filter((item)=>item.id==e.target.id)[0];
            newDo.status = "done";
            let newDos = (dos.filter((item)=>item.id!=e.target.id));
            newDos.push(newDo);
            setDos(newDos);
        }   
    };
    function changeModalStatus(){
        setModalStatus(!modalStatus);
    };

    function addDo(content){
         const newDo = {id:dos.length, content:content, status:"active"};
         dos.push(newDo);
         setDos(()=>dos);
         setModalStatus(()=>false);
         setStatus(()=>"active");
    }
    function changeDoOptionStatus(id){
        setDoOptionStatus(()=>!doOptionStatus);
        setID(()=>id);
    };
    function moveToTrash(id){
        let newDo = dos.filter((item)=>item.id==id)[0];
        newDo.status = "trash";
        let newDos = dos.filter((item)=>item.id!=id);
        newDos.push(newDo);
        setDos(()=>newDos);
        setDoOptionStatus(()=>false);
    }
    function deleteForever(id){
        const newDos = dos.filter((item)=>item.id!=id);
        setDos(()=>newDos);
        setDoOptionStatus(()=>false);
    }
    function moveToActive(id){
        let newDo = dos.filter((item)=>item.id==id)[0];
        newDo.status = "active";
        let newDos = dos.filter((item)=>item.id!=id);
        newDos.push(newDo);
        setDos(()=>newDos);
        setDoOptionStatus(()=>false);
    }

    return(
        <div className="container">
            <div className="header">
                <p className="title">Simple To Do List</p>
                <p className="description">Today is awesome day. The weather is awesome, you are awesome too!</p>
            </div>
            <div className="buttons">
                <div className="buttons-container">
                    <button  className={(statusOfDos === "active")? "button-active":"button-inactive"} onClick={()=>{changeStatus("active")}}>To Do</button> 
                    <button  className={(statusOfDos === "done")? "button-active":"button-inactive"} onClick={()=>{changeStatus("done")}}>Done</button> 
                    <button className={(statusOfDos === "trash")? "button-active":"button-inactive"} onClick={()=>{changeStatus("trash")}}>Trash</button> 
                </div>
                <div style={{width:"fit-content", height:"fit-content", position:"relative"}}>
                    <button className="button-add" onClick={()=>changeModalStatus()}><img src={ADD} alt="add" className="image-add"/></button>
                    {modalStatus && <Modal addDo = {addDo}/>}
                </div>
            </div>
            <div >
                <p className="title-to-do">To Do</p>
                <hr />
                {dos
                .filter(item => item.status === statusOfDos)
                .map(item => (
                    <Do key={item.id} 
                    id={item.id} 
                    content={item.content} 
                    status = {item.status} 
                    changeChecked = {changeChecked} 
                    changeDoOptionStatus= {changeDoOptionStatus}
                    doOptionStatus = {doOptionStatus}
                    changedID = {ID}
                    moveToTrash = {moveToTrash}
                    deleteForever = {deleteForever}
                    moveToActive = {moveToActive}
                    />
                ))}
            </div>
            <footer className="footear">
                <p className="footear-text-author">Made with ❤️ at nFactorial in 2022.</p>
                <p className="footear-text-credits">Credits: icons from Icons8.</p>
            </footer>
        </div>
        
    );
}