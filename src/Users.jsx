import React, { useEffect, useState } from "react";
import User from "./user";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const usersStyle = {
    border: "2px solid blue",
    margin: "15px",
    padding: "15px",
    borderRadius: "8px",
  };
  return (
    <div style={usersStyle}>
      <h2>Users: {users.length}</h2>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
