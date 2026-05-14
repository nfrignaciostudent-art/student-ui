import React, { useState } from "react";

function StudentList({ students, onDelete, setEditingStudent }) {
  const [deletingId, setDeletingId] = useState(null);

  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id} style={{ marginBottom: "10px" }}>
            <strong>{student.name}</strong> - {student.course}{" "}
            <button onClick={() => setEditingStudent(student)}>Edit</button>{" "}
            
            {deletingId === student._id ? (
              <span style={{ marginLeft: "10px", backgroundColor: "#ffebee", padding: "5px", borderRadius: "4px" }}>
                Are you sure?{" "}
                <button onClick={() => { onDelete(student._id); setDeletingId(null); }} style={{ color: "red" }}>Confirm</button>{" "}
                <button onClick={() => setDeletingId(null)}>Cancel</button>
              </span>
            ) : (
              <button onClick={() => setDeletingId(student._id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
