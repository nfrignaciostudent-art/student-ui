import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const API = "http://localhost:5000/students";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const addStudent = async (student) => {
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      fetchStudents();
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  const updateStudent = async (id, student) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      setEditingStudent(null);
      fetchStudents();
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student App</h1>
      <StudentForm
        onAdd={addStudent}
        onUpdate={updateStudent}
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />
      <hr />
      <StudentList
        students={students}
        onDelete={deleteStudent}
        setEditingStudent={setEditingStudent}
      />
    </div>
  );
}

export default App;
