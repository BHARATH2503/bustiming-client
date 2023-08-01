import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import swal from 'sweetalert';
import Axios from 'axios';



export default function ShowTime() {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
            swal("Logut Succesfully", "", "success");
        } catch (error) {
            swal("Someting went wrong", "", "error");
        }
    }

    const [data, setData] = useState([])
    const apiKey = process.env.REACT_APP_API_KEY;
    var head, header;

    const fetchData = async () => {
        const res = await Axios.get(apiKey + "/show")
        // console.log(res)
        setData(res.data)

    }

    const DeleteTime = async (id) => {
        // console.log(id);
        await Axios.delete(`https://find-my-bus.onrender.com/delete/${id}`)
        fetchData();
    }

    useEffect(() => {
        fetchData()
    }, [])

    const searchdata = data.map((val, key) => {
        return (
            <tr key={key}>
                <td>{val.fromplace}</td>
                <td>{val.toplace}</td>
                <td>{val.bustype}</td>
                <td>{val.bustime}</td>
                <td>
                    <Button variant="danger" type="button" onClick={() => DeleteTime(val._id)}>Delete</Button>
                </td>
            </tr >
        )
    });
    head =
        <>
            <tr>
                <th>From Place</th>
                <th>To Place</th>
                <th>Bus Type</th>
                <th>Bus Time</th>
                <th>Delete Time</th>
            </tr></>
    header =
        <div>
            <Table style={{ height: "500px", overflow: "scroll" }}>
                <thead>
                    {head}
                </thead>
                <tbody>
                    {searchdata}
                </tbody>
            </Table>
        </div>

    return (
        <div className='showdata'>
            <div style={{ position: "sticky", top: "80px", backgroundColor: "#B4B3B3", padding: "5px" }}>
                <h1 style={{ textAlign: 'center', color: "#fff" }}>
                    Time Details
                    <Button variant="primary" type="button" onClick={handleLogout} style={{ float: "right", margin: "5px" }}>
                        Log Out
                    </Button>
                </h1>
            </div>
            <div className='data' style={{ margin: "0px", padding: "15px 200px 15px 200px" }}>
                {data.length > 0 ? header : <h1 style={{ textAlign: "center" }}>No Data Found</h1>}
            </div>
        </div>
    );
}
