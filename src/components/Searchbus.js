import React, { useEffect, useState } from "react";
import "../css/Searchbus.css";
import "../index.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Select from "react-select";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { option, type } from "./data";
// import Preloader from "./Preloader";

export default function Search() {
  const [data1, setdata1] = useState(false);
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
  useEffect(() => {
    Search()
  }, [selectedOptions1,selectedOptions2,selectedType])

  const Search = () => {

    Axios.post("https://find-my-bus.onrender.com/search",
      {
        selectedOptions1: selectedOptions1, selectedOptions2: selectedOptions2, selectedType: selectedType,
      }).then((res) => {
        const data = res.data
        if (data.length === 0) {
          setdata1(false);
          setSearch([]);
        } else {
          setSearch(data)
          setdata1(true)

        }
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

      <h1 className="mb-1 time_heading">From {selectedOptions1.label} to {selectedOptions2.label}
        <br></br> {search.length}  Buses Available</h1><center>
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

  return (
    <div className="mt-0 searchBus">
      <div className="row">
        <Card className="card" border="dark" style={{ backgroundColor: '#EAEAEA' }}>
          <Card.Header>
            <h1 style={{ textAlign: 'center' }}>Find  Your Bus Timings</h1>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="select1">
                <h2>Choose your Journey Place</h2>
                <Select className="option"
                  options={option}
                  placeholder="Select journey place"
                  value={selectedOptions1}
                  onChange={handleSelect1}
                  isSearchable={true}
                />
              </div>
              <div className="select2">
                <h2>Choose your Destination Place</h2>
                <Select className="option"
                  options={option}
                  placeholder="Select destination place"
                  value={selectedOptions2}
                  onChange={handleSelect2}
                  isSearchable={true}
                />
              </div>
              <div className="type">
                <h2>Choose the Type of Bus</h2>
                <Select className="option"
                  options={type}
                  placeholder="Select type of bus"
                  value={selectedType}
                  onChange={handleType}
                  isSearchable={true}
                />
              </div>
              <div className="row button" style={{ textAlign: 'center' }}>
              <AnchorLink  href='#timeDetails'>
                <Button className="btnn" onClick={Search} variant="danger" disabled={!selectedOptions1 || !selectedOptions2 || !selectedType} type="button">
                  SEARCH
                </Button>
                </AnchorLink>
              </div>
            </Form>
          </Card.Body>
        </Card>

      </div>

      <div className="time_details" id='timeDetails'>
        {!data1 && selectedType !== 0 && selectedOptions1 !== 0 && selectedOptions2 !== 0 ? <div style={{ textAlign: 'center' }}><h2>No data found</h2></div> : ""}
        {
          search.length !== 0 && header
        }
      </div>



    </div>
  )
}
