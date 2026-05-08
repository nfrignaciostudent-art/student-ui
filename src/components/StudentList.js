import React from "react";

function StudentList({ students, onDelete, setEditingStudent }) {
  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <strong>{student.name}</strong> - {student.course}{" "}
            <button onClick={() => setEditingStudent(student)}>Edit</button>{" "}
            <button onClick={() => onDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
