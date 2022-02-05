import React, { useState } from "react";
import StudentData from "./StudentData.json";
import { Modal, Button, Table } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../Header";

const Student = () => {
  const [list, setlist] = useState(StudentData);
  const [searchbar, setsearchbar] = useState("");
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
  });

  const [mymodel, setmymodel] = useState(false);
  const handlemodelchange = () => {
    setmymodel(false);
  };
  const openmodel = () => {
    setmymodel(true);

    setAddFormData({

      name: "",
    phoneNumber:"",
    age:"",
    email: "",
    })

  };

  console.log(addFormData, "addFormData");

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setlist(list.filter((item) => item.name !== name));
  };

  const onchangeval = (event) => {
    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    setmymodel(false);

    const newlist = {
      id: Math.floor(Math.random() * 10000),
      name: addFormData.name,
      phoneNumber:addFormData.phoneNumber,
      age:addFormData.age,
      email: addFormData.email,

    };

    const newlists = [...list, newlist];
    setlist(newlists);
  };
 
  return (
    <div className="container-fluid">
      <Header />
      <div>
        <Modal
          show={mymodel}
          onHide={handlemodelchange}
          className="addTaskModal"
        >
          <Modal.Header className="justify-center">
            <h4
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Create Task
            </h4>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="m-2">
              <input
                type="text"
                value={addFormData.name}
                className="form-control"
                onChange={onchangeval}
                name="name"
                placeholder="Name"
              />
              </div>
              <div className="m-2">
             <input
                type="number"
                value={addFormData.age}
                className="form-control"
                onChange={onchangeval}
                name="age"
                placeholder="age"
              />
             </div>
             <div className="m-2">
             <input
                type="text"
                className="form-control"
                value={addFormData.email}
                onChange={onchangeval}
                name="email"
                placeholder="email"
              />
             </div>
             <div className="m-2">
             <input
                type="number"
                value={addFormData.phoneNumber}
                className="form-control"
                onChange={onchangeval}
                name="phoneNumber"
                placeholder="phoneNumber"
              />
             </div>
             
              <Button onClick={handleAddFormSubmit} className="btn btn-success m-2">Add</Button>
            </form>
          </Modal.Body>
         
        </Modal>
      </div>

      <div className="my-4 d-flex justify-content-around">
        <div className="w-75">
          <input
            type="text"
            placeholder="Search Name...."
            autoFocus
            value={searchbar}
            style={{
              border: "1px solid darkgray",
              padding: "7px",
              borderRadius: "5px",
              width:"100%"
            }}
            onChange={(e) => {
              setsearchbar(e.target.value);
            }}
          />
        </div>
        <div>
          <Button
            class="btn btn-success btn-lg "
            type="submit"
            onClick={openmodel}
          >
            Add Student
          </Button>
        </div>
      </div>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Sl NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th colSpan="2" className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {list
            .filter((item) => {
              if (searchbar == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchbar.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td className=" text-center m-auto">
                   <span  name={item.name} onClick={handleRemoveItem} className="btn btn-danger">Delete</span>
                    </td>
                    {/* <td className=" text-center m-auto">
                    <Button variant="secondary">Edit</Button> 
                    </td> */}
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Student;
