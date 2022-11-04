import React, { useState } from "react";
import "../css/Searchbus.css";
import "../index.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Select from "react-select";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { option, type } from "./data";



export default function Search() {

  //SELECT1:
  const [selectedOptions1, setSelectedOptions1] = useState();

  function handleSelect1(data) {
    setSelectedOptions1(data);
  }
  //SELECT2:
  const [selectedOptions2, setSelectedOptions2] = useState();
  function handleSelect2(data) {
    setSelectedOptions2(data);
  }

  //TYPE
  const [selectedType, setSelectedType] = useState();
  function handleType(data) {
    setSelectedType(data);
  }




  const [search, setSearch] = useState([]);

  const Search = (err) => {
    console.log(selectedOptions1, selectedOptions2, selectedType);
    Axios.post("https://bustimings.herokuapp.com/search",
      {
        selectedOptions1: selectedOptions1, selectedOptions2: selectedOptions2, selectedType: selectedType,

      }).then((res) => {
        const data = res.data
        setSearch(data)

      });
    if (err) {
      console.log(err);
    }
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

  const head =
    <>
    <tr>
      <th>From Place</th>
      <th>To Place</th>
      <th>Bus Type</th>
      <th>Bus Time</th>
    </tr></>

  const header =
    
      <center>
      <Table  bordered hover className="w-50" style={{ backgroundColor: '#EAEAEA' }}>
        <thead>
          {head}
        </thead>
        <tbody >
          {searchdata}
        </tbody>
      </Table>
      </center>
   
  return (
    
    <div className="searchBus"><br></br>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">

          <Card border="dark" style={{ backgroundColor: '#EAEAEA' }}>
            <Card.Header>
              <h1 style={{ textAlign: 'center' }}>Search You  Timings</h1>
            </Card.Header>
            <Card.Body>
              
                <Form>
                  <Row className="justify-content-md-center">
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
                  </Row>
                  <Row className="justify-content-md-center">
                    <div className="select2">
                      <h2>Choose your Destination Place</h2>
                      <Select
                        options={option}
                        placeholder="Select destination place"
                        value={selectedOptions2}
                        onChange={handleSelect2}
                        isSearchable={true}
                      />
                    </div></Row>
                  <Row className="justify-content-md-center">
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
                  </Row>
                  <Card.Footer>
                    <Row className="justify-content-sm-center">
                      <Col md={2} className="button"><Button onClick={Search} variant="danger" type="button">
                        SEARCH
                      </Button>
                      </Col>
                      <Col md={2} className="button"><Button variant="danger" type="submit">
                        CLEAR
                      </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Form>
             
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="col-3"></div>
      <br></br>
      <div>
      <h1 className="time">Time Details</h1>
        {header}
        </div>

    </div>
  )
}