import { useNavigate } from "react-router";
import "../index.css";
import { useUserAuth } from "../context/UserAuthContext";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Axios from 'axios';
import swal from 'sweetalert';
import Select from "react-select";
import { option, type } from "./data";



export default function Admin() {
  const [fromPlace, setFromPlace] = useState('');
  function handleSelect1(data) {
    setFromPlace(data);
  }
  const [toPlace, setToPlace] = useState('');
  function handleSelect2(data) {
    setToPlace(data);

  }
  const [busType, setBusType] = useState('');
  function handleType(data) {
    setBusType(data);
  }
  const [busTime, setBusTime] = useState();

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const show = () => {
    navigate('/show')
  }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      swal("Logut Succesfully", "", "success");
    } catch (error) {
      swal("Someting went wrong", "", "error");
    }
  }
  const add = (res) => {
    try {
      Axios.post("https://find-my-bus.onrender.com/insert",
        {
          fromPlace: fromPlace.value, toPlace: toPlace.value, busType: busType.value, busTime: busTime,
        }).then(() => {
          swal("Inserted Succesfully", "", "success");
        });
    }
    catch (err) {
      res.send(err);
      swal("Someting went wrong", "", "error");
    }

  };

  return (
    <>


      <div className="Bus">
        <p> Hello Welcome <br />
          {user && user.email}</p>
        <h1 className="bus">Bus Time Editing</h1>
        <Form autoComplete="off" className="Bus1">
          <Container>
            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>From Place</Form.Label>
              <Select
                options={option}
                placeholder="Select journey place"
                value={fromPlace}
                onChange={handleSelect1}
                isSearchable={true}
              />

              {/* <Form.Control type="text" required={true}   onChange={(event) => { setFromPlace(event.target.value); }} placeholder="Enter place"  /> */}
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>To Place</Form.Label>
              <Select
                options={option}
                placeholder="Select destination place"
                value={toPlace}
                onChange={handleSelect2}
                isSearchable={true}
              />
              {/* <Form.Control type="text" required={true} placeholder="Enter place" onChange={(event) => { setToPlace(event.target.value); }} /> */}
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>Bus Type</Form.Label>
              <Select
                options={type}
                placeholder="Select type of bus"
                value={busType}
                onChange={handleType}
                isSearchable={true}
              />
              {/* <Form.Control type="text" required={true} placeholder="Enter type" onChange={(event) => { setBusType(event.target.value); }} /> */}
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>Bus Time</Form.Label>
              <Form.Control type="time" required={true} placeholder="set time" onChange={(event) => { setBusTime((event.target.value)); }} />
            </Form.Group>
            <center>
              <Button className="but1" variant="primary" type="button" onClick={add}>ADD</Button>
              {/* <Button className="but2" variant="info" type="button" title='id,time' onClick={update}>UPDATE</Button> */}
              {/* <Button className="but3" variant="danger" type="button" title='id' onClick={deleted}>DELETE</Button> */}
              <Button className="but3" variant="success" type="button" onClick={show}>SHOW</Button>
              <Button variant="danger" type="button" onClick={handleLogout}>
                Log out
              </Button>
            </center>
          </Container>
        </Form>

      </div>
    </>
  );
};

