import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Axios from 'axios';



export default function Admin() {
  const [id, setId] = useState("");
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [busType, setBusType] = useState("");
  const [busTime, setBusTime] = useState("");

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  const add = (res) => {
    console.log(id, fromPlace, toPlace, busType, busTime);
    try {
      
      Axios.post("https://bustimings.herokuapp.com/insert",
        {
          id: id, fromPlace: fromPlace, toPlace: toPlace, busType: busType, busTime: busTime,
        });
    } 
    catch (err) 
    {
      console.log(err);
      res.send("error");
    }

  };

  const show =(res)=>{
    console.log("show")
    try{
      Axios.get("https://bustimings.herokuapp.com/show")
      
    }
    catch(err){
      console.log(err);
      res.send("error");
    }
  }
  const update = () => {
    Axios.put("https://bustimings.herokuapp.com/update",
      {
        id:id,
        busTime:busTime,
      });
  }

  const deleted =() =>{
    console.log(id)
    Axios.post('https://bustimings.herokuapp.com/delete',{id:id});
    
  }
  return (
    <>


      <div className="Bus">
        <p> Hello Welcome <br />
          {user && user.email}</p>
        <h1 className="bus">Bus Time Editing</h1>
        <Form autoComplete="off" className="Bus1">
          <Container>
            <Form.Group className="m-2" controlId="formBasicText">
              <Form.Label className="m-2">ID</Form.Label>
              <Form.Control type="text" autoFocus required={true} placeholder="Enter id" onChange={(event) => { setId(event.target.value); }} />
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>From Place</Form.Label>
              <Form.Control type="text" required={true} placeholder="Enter place" onChange={(event) => { setFromPlace(event.target.value); }} />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>To Place</Form.Label>
              <Form.Control type="text" required={true} placeholder="Enter place" onChange={(event) => { setToPlace(event.target.value); }} />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>Bus Type</Form.Label>
              <Form.Control type="text" required={true} placeholder="Enter type" onChange={(event) => { setBusType(event.target.value); }} />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>Bus Time</Form.Label>
              <Form.Control type="text" required={true} placeholder="Enter time" onChange={(event) => { setBusTime(event.target.value); }} />
            </Form.Group>
            <center>
              <Button className="but1" variant="primary" type="button" onClick={add}>ADD</Button>
              <Button className="but2" variant="info" type="button" onClick={update}>UPDATE</Button>
              <Button className="but3" variant="danger" type="button" onClick={deleted}>DELETE</Button>
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </center>
          </Container>
        </Form>

      </div>
    </>
  );
};

