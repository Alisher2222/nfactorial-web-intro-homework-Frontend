import "./components/style/main.css";
import ADD from "./assets/add.png";
import Do from "./components/do";
import {useState, useEffect} from 'react';
import ModalAdd from "./components/modal";
export default function App() {
  const [addStatus, setAddStatus] = useState(false);
  const [addValue, setAddValue] = useState('');
  const [dos, setDos] = useState([]);
  const [buttonStatus, setButtonStatus] = useState("active");
  const [trashStatus, setTrashStatus] = useState(false);
  const [trashID, setTrashID] = useState(-1);
  const [indexCounter, setIndexCounter] = useState(0);
  useEffect(()=>{
    const arrayFromStorage = JSON.parse(localStorage.getItem("dos"));
    if(!arrayFromStorage){
      localStorage.setItem("dos",JSON.stringify([]));
      setDos([]);
    }else{
      setDos(arrayFromStorage);
    }
  },[]);
  function changeAddStatus(){
    setAddStatus(!addStatus);
  }
  function changeAddValue(event){
    setAddValue(event.target.value);
  }
  function submit(){
    const newDo = {id:indexCounter, content:addValue, status:"active"};
    const newDos = [...dos,newDo];
    setDos(()=>newDos);
    localStorage.setItem('dos',JSON.stringify(newDos));
    console.log(newDos)
    setAddValue('');
    setAddStatus(false);
    setIndexCounter(indexCounter+1);
  }
  function changeDos(id,status){
    console.log(id, status)
    const newDo = dos.find((item) => item.id === id); 
    if (newDo) {
      const updatedDo = { ...newDo, status }; 
      const newDos = dos.map((item) =>
        item.id === id ? updatedDo : item
      ); 
      setDos(newDos); 
      localStorage.setItem('dos', JSON.stringify(newDos));
      setTrashStatus(false);
  }
}
  function showProperties(id){
    setTrashStatus(()=>!trashStatus);
    setTrashID(()=>id);
  }
  function deleteDo(id){
    const newDos = dos.filter((item)=>item.id!=id);
    setDos(newDos);
    localStorage.setItem('dos', JSON.stringify(newDos));
    setTrashStatus(false);
  }
  return (
 <div className = "container">
    <div className="header">
      <div className="header-text">
        <p className="header-title">Simple To Do List</p>
        <p className="header-description">Today is awesome day. The weather is awesome, you are awesome too!</p>
      </div>
      <div className="buttons"> 
        <div className="buttons-status">
          <button className={(buttonStatus === "active")?"button-inactive":"button-active"} onClick={()=>setButtonStatus("active")}>To Do</button>
          <button className={(buttonStatus === "done")?"button-inactive":"button-active"} onClick={()=>setButtonStatus("done")}>Done</button>
          <button className={(buttonStatus === "trash")?"button-inactive":"button-active"} onClick={()=>setButtonStatus("trash")}>Trash</button>
        </div>
        <div className="buttons-add">
          <img src={ADD} alt="add" className="buttons-add-img" onClick={changeAddStatus}/>
          {addStatus && <ModalAdd addValue = {addValue} changeAddValue = {changeAddValue} submit = {submit}/>}
        </div>
      </div>
    </div>
    <div className="main">
      <p className="main-title">To Do</p>
      <hr />
      {dos.filter((item)=>item.status === buttonStatus).map((item)=><Do 
      key = {item.id} 
      content = {item.content} 
      id = {item.id}
      changeDos = {changeDos}
      status = {item.status}
      showProperties = {showProperties}
      trashID = {trashID}
      trashStatus = {trashStatus}
      deleteDo = {deleteDo}
      />)}
    </div>
 </div>
  );
}