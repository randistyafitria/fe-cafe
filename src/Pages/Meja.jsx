import {useState, useEffect} from "react";
import axios from "axios";
import React from 'react';
import { Toast } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Navbar from "../Components/Navbar/Navbar"


export default function Meja() {
    if (!localStorage.getItem(`token`)) {
        window.location = `./login`;
    }
    let [meja, setMeja] = useState([]);

    let [idMeja, setIdMeja] = useState("");
    let [nomorMeja, setNomorMeja] = useState("");
    let [status, setStatus] = useState("");

    let [action, setAction] = useState("");
    let [message, setMessage] = useState("");
    let [modal, setModal] = useState("");
    let [modal2, setModal2] = useState("");

    let [selectedMeja, setSelectedMeja] = useState({
        nomor_meja: null,
        status: null,
    });

    let token = localStorage.getItem(`token`);
    let authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    let getMeja = () => {
        let endpoint = `http://localhost:8080/meja`;

        axios.get(endpoint, authorization).then((result) => {
            setMeja(result.data.meja);
            // console.log(result.data)
        }).catch((error) => console.log(error));
    };

    /** create function to show Toast */
  let showToast = (message) => {
    let myToast = new Toast(document.getElementById(`myToast`), {
      autohide: true,
    });
    /** perintah utk mengisi state 'message */
    setMessage(message);

    /** show Toast */
    myToast.show();
  };

  let showDetail = (item) => {
    modal2.show();

    setSelectedMeja(item);
  };

  let tambahMeja = () => {
    // display modal
    modal.show();

    // mengosongkan inputan form nya
    setIdMeja(0);
    setNomorMeja("");
    setStatus("");
  };

  let editMeja = (item) => {
    // display modal
    modal.show();

    // isi form sesuai data yg dipilih
    setIdMeja(item.id_meja);
    setNomorMeja(item.nomor_meja);
    setStatus(item.status);
  };

  let hapusMeja = (item) => {
    if (window.confirm(`Are you sure want to delete this data?`)) {
      let endpoint = `http://localhost:8080/meja/${item.id_meja}`;

      //sending data
      axios
        .delete(endpoint, authorization)
        .then((response) => {
          showToast(response.data.message);
          getMeja();
        })
        .catch((error) => console.log(error));
    }
  };

  let simpanMeja = (event) => {
    event.preventDefault();
    // close modal
    modal.hide();
    if (action === "insert") {
      let endpoint = `http://localhost:8080/meja`;
      let request = new FormData();
      request.append(`nomor_meja`, nomorMeja);
      request.append(`status`, status);

      // send data
      axios
        .post(endpoint, request, authorization)
        .then((response) => {
          showToast(response.data.message);
          // refresh data pelanggaran
          getMeja();
        })
        .catch((error) => console.log(error));
    } else if (action === "edit") {
      let endpoint = `http://localhost:8080/meja/${idMeja}`;
      let request = new FormData();
      request.append(`nomor_meja`, nomorMeja);
      request.append(`status`, status);

      // sending data utk update pelanggaran
      axios
        .put(endpoint, request, authorization)
        .then((response) => {
          showToast(response.data.message);
          // refresh data pelanggaran
          getMeja();
        })
        .catch((error) => console.log(error));
    }
  };

    useEffect(() => {
        let myModal = new Modal(document.getElementById(`modal-meja`));
    setModal(myModal);

    let newModal = new Modal(document.getElementById(`modal-detail`));
    setModal2(newModal);

        getMeja();
    }, []);

    return (
        <div className="row col-lg-12">
            <div className="col-lg-2 mt-4">
                <Navbar/>
            </div>
            <div className="col-lg-10 mt-4">
                <div className="ms-4 me-2 cardContent">
                    <div className="p-4">
                        <h1 className="fw-bold">Meja</h1>
                        {/* <h5 className="mb-4">This is room list data of hotel</h5> */}
                        <div className="row rounded-3 col-md-12">
                            <ul className="list-group list-group-flush mt-2">
                                <li className="list-group-item ms-2 p-4 rounded-4"
                                    style={
                                        {background: `#a5a58d`}
                                }>
                                    <div className="row">
                                        <div className="col-md-2 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>No</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-4 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Nomor Meja</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-4 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Status</b>
                                            </h6>
                                        </div>
                                        <div className="col-md-2 mx-auto align-items-center">
                                            <h6 className="text-custom">
                                                <b>Actions</b>
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {
                            meja.map((item) => (
                                <ul className="list-group list-group-flush mt-2">
                                    <li className="list-group-item ms-2 p-4 rounded-4"
                                        // style={{background: `#dec9e9`}}
                                        >
                                        <div className="row">
                                            <div className="col-md-2 mx-auto align-items-center">
                                                <h2 className="text-custom">
                                                    <b>
                                                       {item.id_meja}
                                                    </b>
                                                </h2>
                                            </div>
                                            <div className="col-md-4 mx-auto align-items-center">
                                                <h6 className="text-custom">
                                                    {item.nomor_meja}</h6>
                                            </div>
                                            <div className="col-md-4 mx-auto align-items-center">
                                                <h6 className="text-custom">
                                                    {item.status} </h6>
                                            </div>
                                            <div className="col-md-2 mx-auto align-items-center">
                                                {/* <h6 className="text-custom">Actions</h6> */}
                                                <button
                                                    className="btn btn-outline-primary"
                                                    onClick={() => editMeja(item)}
                                                >
                                                    <i className="bx bx-pencil"></i>
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() => hapusMeja(item)}
                                                >
                                                    <i className="bx bx-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}

                    </div>
                        <div className="col-lg-2">
                            <button
                            className="btn btn-dark"
                            onClick={() => tambahMeja()}
                            >
                            <span className="bx bx-plus"></span>Tambah Meja
                            </button>
                        </div>
                    </div>

                    {/* <div className="modal" id="modal-meja">
                            <div className="modal-dialog modal-md">
                                <div className="modal-content">
                                    <div className="modal-header bg-primary">
                                        <h4 className="text-white">Form Meja</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={(ev) => simpanMeja(ev)}>
                                        Nomor Meja
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            required
                                            onChange={(e) => setNomorMeja(e.target.value)}
                                            value={nomorMeja}
                                        />
                                        Status
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            required
                                            onChange={(e) => setStatus(e.target.value)}
                                            value={status}
                                        />
                                        <br />
                                        <button type="submit" className="btn btn-outline-primary">
                                            <span className="bx bx-check"></span>
                                        </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                </div>
            </div>
        </div>
    );
}
