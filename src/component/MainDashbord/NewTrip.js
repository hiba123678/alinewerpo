import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';
import  Sidebar  from './Sidebar';
function NewTrip() {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// real date
const [From, setFrom]= useState('');
const [To, setTo]= useState('');
const [Date, setDate]= useState('');

//edite data
const [editId, setEditId]= useState('');
const [editFrom, setEditFrom]= useState('');
const [editTo, setEdittTo]= useState('');
const [editDate, setEditDate]= useState('');








  

  
//   defination data that come backe from backend
  const [data , setData]=useState([]);
  
useEffect( ()=>{
    
   
    // getDat();

},[])

// gegt data from backend
const getData=()=>{

axios.get('http://localhost:7170/api/Trip/GetAll').then((result)=>{setData(result.data)}).catch((error)=>{console.log(error)})

}
  
// define function when click edit

  
// define function when click delet


// define function when save edite 



const handelSave=()=>{
const url='http://localhost:7170/api/Trip/GetAll';

const data={
    'From':From,
    'To': To,
    'Date':Date
}
axios.post(url,data).then((result)=>{
    getData();
    clear();
    toast.success("trip has added");
}).catch((error)=>{console.log(error)})
}
//for clrear all thing after submit
const clear=()=>{
    setFrom('');
    setTo('');
    setDate('');
    setEditFrom('');
    setEdittTo('');
    setEditDate('');
    setEditId('');
}
    return (
   <>
{/*  
<Sidebar/> */}
      {/* add trip */}
     <ToastContainer />
    <Container>
      <h3 className='fw-bolder'>Quiqe create new trip:</h3><br/>
      <Row>
        <Col>
        <input type="text" className="form-control" placeholder='Eenter destenation1' value={From} onChange={(e)=>setFrom(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder='Eenter destenation2' value={To} onChange={(e)=>setTo(e.target.value)}/>
        
        </Col>
        <Col>  <input type="Date" className="form-control" placeholder='Eenter Date' value={Date} onChange={(e)=>setDate(e.target.value)}/>
        </Col>

        <Col>
        <button className='btn btn-primary' onClick={()=>handelSave()} >Sbmite</button>
        </Col>
      </Row>
    </Container>



    </>
  )
}

export default NewTrip;
