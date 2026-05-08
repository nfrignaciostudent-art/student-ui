import React, { useState, useEffect } from "react";

function StudentForm({ onAdd, onUpdate, editingStudent, setEditingStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setCourse(editingStudent.course);
    } else {
      setName("");
      setCourse("");
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course) return;

    if (editingStudent) {
      onUpdate(editingStudent._id, { name, course });
    } else {
      onAdd({ name, course });
    }

    setName("");
    setCourse("");
  };

  const handleCancel = () => {
    setEditingStudent(null);
    setName("");
    setCourse("");
  };

  return (
    <div>
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <br />
        <div>
          <label>Course: </label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course"
            required
          />
        </div>
        <br />
        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
        {editingStudent && (
          <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default StudentForm;
