import React, { useState } from "react";
import "../css/Searchbus.css";
import "../index.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Select from "react-select";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import { option, type } from "./data";

export default function Search() {
  var head, header;
  //SELECT1:
  const [selectedOptions1, setSelectedOptions1] = useState(0);
  function handleSelect1(data) {
    setSelectedOptions1(data);
  }
  //SELECT2:
  const [selectedOptions2, setSelectedOptions2] = useState(0);
  function handleSelect2(data) {
    setSelectedOptions2(data);
  }
  //TYPE
  const [selectedType, setSelectedType] = useState(0);
  function handleType(data) {
    setSelectedType(data);
  }
  const [search, setSearch] = useState([]);
  if (selectedOptions1 === 0 && selectedOptions2 === 0 && selectedType === 0)
  {
    header = <div style={{display:'none'}}></div>
  }
  else if (selectedOptions1 !== 0 || selectedOptions2 !== 0 || selectedType!== 0) {
    header =<>
    <center>
      <img src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&duration=1500&center=true&vCenter=true&width=535&lines=Loading+.+.+." alt='loading'/>
      {/* <img className="time" src="https://usagif.com/wp-content/uploads/loading-87.gif" width='25%' align='center' alt="Typing SVG" /> */}
      </center>
    </>
  }
  else if (search.length < 0 || setSearch.length < 0) {
    header = <h1 className="time">No Data Found</h1>
  }
  else {

  }
  const Search = () => {
    swal("Wait for a second...", "", "warning");
    Axios.post("https://find-my-bus.onrender.com/search" || "http://localhost:3000/searchbus",
      {
        selectedOptions1: selectedOptions1, selectedOptions2: selectedOptions2, selectedType: selectedType,


      }).then((res) => {
        const data = res.data
        setSearch(data)
      });
  }
  const searchdata = search.map((val, key) => {
    return (
      <tr key={key}>
        <td>{val.fromplace}</td>
        <td>{val.toplace}</td>
        <td>{val.bustype}</td>
        <td>{val.bustime}</td>
      </tr>
    )
  });
  if (search.length >= 1) {
    head =
      <>
        <tr>
          <th>From Place</th>
          <th>To Place</th>
          <th>Bus Type</th>
          <th>Bus Time</th>
        </tr></>
    header =
      <div>
        <h1 className="mb-1 time_heading">Time Details</h1><center>
          <Table bordered hover className="table">
            <thead>
              {head}
            </thead>
            <tbody>
              {searchdata}
            </tbody>
          </Table>
        </center>
      </div>
  }
  return (
    <div className="mt-2  searchBus">
      <div className="row">
        <Card border="dark" style={{ backgroundColor: '#EAEAEA' }}>
          <Card.Header>
            <h1 style={{ textAlign: 'center' }}>Search You  Timings</h1>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="select1">
                <h2>Choose your Journey Place</h2>
                <Select
                  options={option}
                  placeholder="Select journey place"
                  value={selectedOptions1}
                  onChange={handleSelect1}
                  isSearchable={true}
                />
              </div>
              <div className="select2">
                <h2>Choose your Destination Place</h2>
                <Select
                  options={option}
                  placeholder="Select destination place"
                  value={selectedOptions2}
                  onChange={handleSelect2}
                  isSearchable={true}
                />
              </div>
              <div className="type">
                <h2>Choose the Type of Bus</h2>
                <Select
                  options={type}
                  placeholder="Select type of bus"
                  value={selectedType}
                  onChange={handleType}
                  isSearchable={true}
                />
              </div>
              <div className="row button" style={{ textAlign: 'center' }}>
                <Button className="btnn" onClick={Search} variant="danger" type="button">
                  SEARCH
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
<div className="time_details">{header}</div>
      


    </div>
    )
}
