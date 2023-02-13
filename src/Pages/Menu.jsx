import {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar"


export default function Menu() {
    if (!localStorage.getItem(`token`)) {
        window.location = `./login`;
    }
    let [list, setList] = useState([]);

    let token = localStorage.getItem(`token`);
    let authorization = { 
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    let getList = () => {
        let endpoint = `http://localhost:8080/menu`;

        axios.get(endpoint, authorization).then((result) => {
            setList(result.data.menu);
            // console.log(result.data)
        }).catch((error) => console.log(error));
    };

    useEffect(() => {
        getList();
    }, []);
    return (
        <div className="row col-lg-12">
            <div className="col-lg-2 mt-4">
                <Navbar/>
            </div>
            <div className="col-lg-10 mt-4">
                <div className="ms-4 me-2 cardContent">
                    <div className="p-4">
                        <h1 className="fw-bold">Menu</h1>
                        {/* <h5 className="mb-4">This is room list data of hotel</h5> */}
                        <div className="row rounded-3 col-md-12">
                            <ul className="list-group list-group-flush mt-2">
                                <li className="list-group-item ms-2 p-4 rounded-4"
                                    style={
                                        {background: `#a5a58d`}
                                }>
                                    <div className="row">
                                        <div className="col-md-1 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>NO</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-2 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Nama Menu</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-2 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Jenis</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-4 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Deskripsi</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-2 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Harga</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-1 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Actions</b>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {
                            list.map((item) => (
                                <ul className="list-group list-group-flush mt-2">
                                    <li className="list-group-item ms-2 p-4 rounded-4"
                                        // style={{background: `#a5a58d`}}
                                        >
                                        <div className="row">
                                            <div className="col-md-1 mx-auto align-items-center">
                                                <h2 className="text-custom">
                                                    <b>
                                                       {item.id_menu}
                                                    </b>
                                                </h2>
                                            </div>
                                            <div className="col-md-2 mx-auto align-items-center">
                                                <h6 className="text-custom">
                                                    {item.nama_menu}</h6>
                                            </div>
                                            <div className="col-md-2 mx-auto align-items-center">
                                                <h6 className="text-custom">
                                                    {item.jenis} </h6>
                                            </div>
                                            <div className="col-md-4 mx-auto align-items-center">
                                                <h6 className="text-custom">
                                                    {item.deskripsi} </h6>
                                            </div>
                                            <div className="col-md-2 mx-auto align-items-center">
                                                <h6 className="text-custom">
                                                    {item.harga} </h6>
                                            </div>
                                            <div className="col-md-1 mx-auto align-items-center">
                                                <h6 className="text-custom">Actions</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        } </div>
                    </div>
                </div>
            </div>
        </div>
    );
}