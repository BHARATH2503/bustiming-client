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
    const add = () => {
        console.log(id, fromPlace, toPlace, busType, busTime);
        alert("Added Succesfully...")
        Axios.post("http://localhost:3001/insert",
            {
               
                id:id,fromPlace: fromPlace, toPlace: toPlace, busType: busType, busTime: busTime,
               
            });
    };

    const update = () => {
        Axios.post("http://localhost:3001/insert",
            {
                busType: busType, busTime: busTime
            });
    }

    return (
        <>
            <div className="Bus"> <br></br>
                <h1 className="bus">Bus Time Editing</h1>
                <Form autoComplete="off" className="Bus1">
                    <Container>
                        <Form.Group className="m-3" controlId="formBasicText">
                            <Form.Label className="m-2">ID</Form.Label>
                            <Form.Control type="text" autoFocus required={true} placeholder="Enter id" onChange={(event) => { setId(event.target.value); }} />
                        </Form.Group>
                        <Form.Group className="m-3" controlId="formBasicText">
                            <Form.Label>From Place</Form.Label>
                            <Form.Control type="text"  required={true} placeholder="Enter place" onChange={(event) => { setFromPlace(event.target.value); }} />
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
                            <Button className="but1" variant="primary" type="submit" onClick={add} >ADD</Button>
                            <Button className="but2" variant="info" type="button" onClick={update} >UPDATE</Button>
                            <Button className="but3" variant="danger" type="button">DELETE</Button>
                        </center>
                    </Container>
                </Form>

            </div>
        </>
    )
}















// {/* <h1>Add Times</h1>
//             <label>From Place:</label>
//             <input type="text" onChange={(event)=>{setFromPlace(event.target.value);}} />
//             <label>To Place:</label>
//             <input type="text" onChange={(event)=>{setToPlace(event.target.value);}} />
//             <label>Bus Type:</label>
//             <input type="text" onChange={(event)=>{setBusType(event.target.value);}} />
//             <label>Time:</label>
//             <input type="text" onChange={(event)=>{setBusTime(event.target.value);}} />
//             <button onClick={add}>ADD</button> */}
