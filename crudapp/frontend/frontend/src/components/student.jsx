import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {
  const [id, setId] = useState('');
  const [studentname, setName] = useState('');
  const [studentaddress, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("http://localhost:8081/api/v1/student/getAll");
      setStudents(result.data);
    } catch (error) {
      console.error("Error loading students: ", error);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/v1/student/save", {
        studentname: studentname,
        studentaddress: studentaddress,
        mobile: mobile
      });
      alert("Student Registered Successfully");
      setName('');
      setAddress('');
      setMobile('');
      Load();
    } catch (error) {
      alert("Student Registration Failed");
    }
  }

  async function editStudent(student) {
    setName(student.studentname);
    setAddress(student.studentaddress);
    setMobile(student.mobile);
    setId(student.id);
  }

  async function deleteStudent(studentId) {
    try {
      await axios.delete(`http://localhost:8081/api/v1/student/delete/${studentId}`);
      alert("Student deleted Successfully");
      Load();
    } catch (error) {
      console.error("Error deleting student: ", error);
    }
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8081/api/v1/student/edit/${id}`, {
        studentname: studentname,
        studentaddress: studentaddress,
        mobile: mobile
      });
      alert("Student Updated Successfully");
      setId('');
      setName('');
      setAddress('');
      setMobile('');
      Load();
    } catch (error) {
      alert("Student Update Failed");
    }
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Student Name</label>
            <input type="text" className="form-control" value={studentname} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Student Address</label>
            <input type="text" className="form-control" value={studentaddress} onChange={(event) => setAddress(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input type="text" className="form-control" value={mobile} onChange={(event) => setMobile(event.target.value)} />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update}>Update</button>
          </div>
        </form>
      </div>
      <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentname}</td>
              <td>{student.studentaddress}</td>
              <td>{student.mobile}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={() => editStudent(student)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
