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
import logooff from '././User/image/logooff.png';
import { useNavigate } from 'react-router-dom';
function CURD() {

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








  const tripdata=[
{id:1,
    From:'syria',
To:'lebanon',
Date:'22/3/2023'},

{id:2,
    From:'syria2',
To:'lebanon2',
Date:'22/3/2023'},

{ id:3,
    From:'syria3',
To:'lebanon3',
Date:'22/3/2023'},

{id:4,
    From:'syria4',
To:'lebanon4',
Date:'22/3/2023'},

  ]
  

  
//   defination data that come backe from backend
  const [data , setData]=useState([]);
  
useEffect( ()=>{
    
    setData(tripdata);
    // getDat();

},[])

// gegt data from backend
const getData=()=>{

axios.get('http://localhost:7170/api/Trip/GetAll').then((result)=>{setData(result.data)}).catch((error)=>{console.log(error)})

}
  
// define function when click edit
const handelEdit =(id)=> {
    // alert(id);
    axios.get(`http://localhost:7170/api/Trip/${id}`).
    then((result)=>{
       setEditFrom(result.data.From);
       setEdittTo(result.data.To);
       setEditDate(result.data.Date);
       setEditId(id);
    
    }).catch((error)=>{console.log(error)})
    handleShow();
}
  
// define function when click delet
const handelDelet =(id)=> {

     if(window.confirm('Are you sure delet this trip')== true)
     { 
        //  alert(id);
        axios.delete(`http://localhost:7170/api/Trip/${id}`).
        then((result)=>{
            if(result.status === 200){
                toast.success("trip has deleted");
                getData();
            }
        
        }).catch((error)=>{console.log(error)})
        }
  
}

// define function when save edite 

const handleUpdate= ()=>{
const url= `http://localhost:7170/api/Trip/${editId}`;
const data={
    'id':editId,
    'From':editFrom,
    'To': editTo,
    'Date':editDate
}
axios.put(url,data).then((result)=>{
    getData();
    clear();
    toast.success("trip has updated");
}).catch((error)=>{console.log(error)})

}

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
   <Fragment>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder'>
            <img
              alt=""
              src={logooff}
              width="50%"
              height="auto"
              className="d-inline-block "
            />{' '} &nbsp;
           Dashboard
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* <a href="#login">Back To Home</a> */}
            <button onClick={navigateToHome}>Go to Home</button>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar> <br/> <br/> <br/>
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

<br/><br/><br/>

<br/>
{/* display trip */}
<h3 className='fw-bolder text-center'>All Trip in System:</h3> <br/>
    <Table striped bordered hover className='container'>
      <thead>
        <tr>
          <th>#</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length> 0 ? 
        data.map((item,index)=>{
            return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.From}</td>
                <td>{item.To}</td>
                <td>{item.Date}</td>
                <td colSpan={2}>
                <button className='btn btn-primary' onClick={()=> handelEdit(item.id)}>Edit</button> &nbsp;
                <button className='btn btn-danger'onClick={()=> handelDelet(item.id)}>Delete</button>
                </td>
              </tr>)
        })
    :'looding'}
        
      
      </tbody>
    </Table>

    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Edit Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col>
        <input type="text" className="form-control" placeholder='Eenter destenation1' value={editFrom} onChange={(e)=>setEditFrom(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder='Eenter destenation2' value={editTo} onChange={(e)=>setEdittTo(e.target.value)}/>
        
        </Col>
        <Col>  <input type="Date" className="form-control" placeholder='Eenter Date' value={editDate} onChange={(e)=>setEditDate(e.target.value)}/>
        </Col>
      
      </Row> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default CURD;
