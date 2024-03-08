import React, { useEffect, useState } from "react";

function Update() {
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts").then((response) => response.json()).then((data) => setData(data.posts));}, []);

  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  const handleUpdate = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, title: editedData[id] };
      }
      return item;
    });

    setData(updatedData);
    setEditMode(null);
    setEditedData({});
  };

  const handleEdit = (id, title) => {
    setEditMode(id);
    setEditedData({ ...editedData, [id]: title });
  };

  return (
    <>
      <table style={{ textAlign: "center" }} border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>UserId</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((val, index) => (
            <tr key={`tr-${index}`}>
              <td>{index + 1}</td>
              <td>
                {editMode === val.id ? (<input type="text" value={editedData[val.id] || val.title} onChange={(e) => setEditedData({...editedData,[val.id]: e.target.value,})}/>) : (val.title)}
              </td>
              <td>{val.body}</td>
              <td>{val.userId}</td>
              <td>
                {editMode === val.id ? (
                  <button type="button" onClick={() => handleUpdate(val.id)}>Save</button>
                ) : (
                  <>
                    <button type="button" onClick={() => handleEdit(val.id, val.title)}>Edit</button>
                    <button type="button" onClick={() => handleDelete(val.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Update;